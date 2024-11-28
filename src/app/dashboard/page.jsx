import { getMyProfile } from '@/actions/users';

import SideBar from '@/components/Sidebar';
import InfoSection from '@/components/dashboard/InfoSection';
import { PortfolioChart } from '@/components/dashboard/PortfolioChart';
import PropertyCard from '@/components/dashboard/PropertyCard';
import { Button } from '@/components/ui/button';
import { calculateMonthlyIncome } from '@/lib/utils';
import Link from 'next/link';

const DashboardPage = async () => {
  const profile = await getMyProfile();

  const chartData = generateChartData(profile);
  console.log(chartData);

  return (
    <SideBar>
      <main className='relative w-full overflow-auto rounded-l-2xl bg-background'>
        <div className='grid h-screen max-h-[75rem] min-h-[50rem] grid-cols-12 grid-rows-10 gap-4 p-4 max-md:h-auto max-md:max-h-none max-md:grid-rows-none max-md:gap-y-10 max-md:py-6'>
          <InfoSection profile={profile} />

          <div className='col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-md:col-span-full max-md:grid-rows-none max-md:gap-4'>
            <div className='col-span-8 row-span-9 max-md:col-span-full'>
              <div className='box size-full overflow-hidden'>
                <div className='size-full'>
                  <PortfolioChart chartData={chartData} />
                </div>
              </div>
            </div>
          </div>

          <div className='order-2 col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-md:col-span-full max-md:grid-rows-none max-md:gap-4'>
            <div className='col-span-4 row-span-9 max-md:col-span-full'>
              <div className='box size-full overflow-hidden rounded-none'>
                <div className='relative flex size-full flex-col justify-center gap-2 overflow-hidden'>
                  <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-muted-foreground'>Your Properties</h1>
                    <Link href='/my-properties'>
                      <Button variant='ghost' size='sm' className='text-muted-foreground'>
                        View all
                      </Button>
                    </Link>
                  </div>
                  <div className='relative flex size-full flex-col justify-center gap-2 overflow-hidden rounded-lg border border-border bg-card'>
                    <div className='hide-scrollbar relative flex h-full flex-1 flex-col justify-start gap-2 overflow-y-auto rounded-lg p-2 max-md:overflow-y-visible'>
                      {profile.investments.map((investment) => (
                        <PropertyCard key={'investment-' + investment.id} investment={investment} />
                      ))}
                      {profile.investments.length == 0 && (
                        <div className='flex flex-1 flex-col items-center justify-center text-center text-xs text-muted-foreground'>
                          You have no investments yet.
                        </div>
                      )}
                      <div className='h-16 w-full'>&nbsp;</div> {/* Spacer */}
                    </div>
                    <div className='pointer-events-none absolute bottom-0 left-0 h-10 w-full bg-gradient-to-b from-transparent to-card'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SideBar>
  );
};

// Function to generate chartData from profile data
function generateChartData(profile) {
  const dataPoints = {};

  profile.investments.forEach((investment) => {
    const investmentDate = new Date(investment.createdAt);

    investment.property.propertyValues.forEach((valueEntry) => {
      const valueDate = new Date(valueEntry.valueDate);

      // Skip if value entry is before investment date
      if (valueDate < investmentDate) return;

      const date = valueEntry.valueDate;

      if (!dataPoints[date]) {
        dataPoints[date] = { date, accountValue: 0, monthlyYield: 0 };
      }

      const shareValue = valueEntry.propertyValue / investment.property.totalShares;
      const investmentValue = shareValue * investment.sharesOwned;

      dataPoints[date].accountValue += investmentValue;

      const monthlyYield = calculateMonthlyIncome({
        rentalIncome: investment.property.rentalIncome,
        sharesOwned: investment.sharesOwned,
        totalShares: investment.property.totalShares,
        currentValue: valueEntry.propertyValue,
        asYield: true,
      });

      dataPoints[date].monthlyYield += parseFloat(monthlyYield);
    });
  });

  const chartData = Object.values(dataPoints).sort((a, b) => new Date(a.date) - new Date(b.date));

  return chartData;
}

export default DashboardPage;
