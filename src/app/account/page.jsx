import { getAllProperties } from '@/actions/properties';

import ListingCard from '@/components/ListingCard';
import SideBar from '@/components/Sidebar';
import AmountCard from '@/components/dashboard/AmountCard';
import InfoSection from '@/components/dashboard/InfoSection';
import { PortfolioChart } from '@/components/dashboard/PortfolioChart';
import PropertyCard from '@/components/dashboard/PropertyCard';
import { PropertyChart } from '@/components/dashboard/PropertyChart';
import { Button } from '@/components/ui/button';
import {
  calculateAccountValue,
  calculateLastMonthAccountValue,
  calculateLastMonthMonthlyYield,
  calculateTotalMonthlyYield,
  formatCurrency,
  getGreeting,
} from '@/lib/utils';
import clsx from 'clsx';
import { ChevronRightIcon, ClipboardIcon, TrendingDownIcon, TrendingUpIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MyPropertiesList from '@/components/dashboard/MyPropertiesList';
import { DataTable } from '@/components/DataTable';
import UpdateProfileForm from '@/components/UpdateProfileForm';
import ReferButton from '@/components/ReferButton';
import { getMyProfile } from '@/actions/users';
import WithdrawForm from '@/components/dashboard/WithdrawForm';
import DepositForm from '@/components/dashboard/DepositForm';

const AccountPage = async () => {
  const profile = await getMyProfile();

  const accountValue = calculateAccountValue(profile.investments);
  const lastMonthAccountValue = calculateLastMonthAccountValue(profile.investments);
  const lastMonthAccountValueChange = Math.abs(accountValue - lastMonthAccountValue);

  const MonthlyYield = calculateTotalMonthlyYield(profile.investments);
  const lastMonthMonthlyYield = calculateLastMonthMonthlyYield(profile.investments);
  const lastMonthMonthlyYieldChange = Math.abs(MonthlyYield - lastMonthMonthlyYield);

  const transactions = profile.transactions
    .map((transaction) => {
      let isNegative = false;
      if (transaction.type === 'withdraw') isNegative = true;
      if (transaction.type === 'sell share') isNegative = true;
      const newTransaction = { ...transaction, amount: isNegative ? -transaction.amount : transaction.amount };
      return newTransaction;
    })
    .reverse();

  return (
    <SideBar>
      <main className='relative w-full overflow-auto rounded-l-2xl bg-background'>
        <div className='grid h-screen max-h-[75rem] min-h-[50rem] grid-cols-12 grid-rows-10 gap-4 p-4 max-md:h-auto max-md:max-h-none max-md:grid-rows-none max-md:gap-y-10 max-md:py-6'>
          {/* <div className='col-span-full row-span-1'>
            <div className='box'>
              <div className='flex size-full items-start justify-between gap-3 max-md:flex-col md:items-center'>
                <div className='flex flex-col'>
                  <div className='text-2xl font-bold text-primary'>
                    <span className='font-medium text-foreground'>{getGreeting()},</span> Meshal
                  </div>
                  <div className=''>
                    <p className='text-sm text-muted-foreground'>You can view and edit your account details here.</p>
                  </div>
                </div>
                <div className='flex gap-3 md:px-4'>
                  <ReferButton />
                </div>
              </div>
            </div>
          </div> */}
          <div className='col-span-full row-span-1'>
            <div className='box'>
              <div className='flex size-full items-start justify-between gap-3 max-md:flex-col md:items-center'>
                <div className='flex flex-col'>
                  <div className='text-2xl font-bold text-primary'>
                    <span className='font-medium text-foreground'>{getGreeting()},</span> Meshal
                  </div>
                  <div className=''>
                    <p className='text-sm text-muted-foreground'>
                      Here is what&apos;s happening with your investments today.
                    </p>
                  </div>
                </div>
                <div className='flex gap-3 md:px-4'>
                  <ReferButton />
                  <WithdrawForm userBalance={profile.balance}>
                    <Button size='sm' variant='ringHoverOutline'>
                      Withdraw Funds
                    </Button>
                  </WithdrawForm>
                  <DepositForm userBalance={profile.balance}>
                    <Button size='sm' variant='ringHover'>
                      Add Funds
                    </Button>
                  </DepositForm>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-4 row-span-2 max-md:col-span-full'>
            <AmountCard
              title='Cash Balance'
              value={formatCurrency(profile.balance, { isCompact: profile.balance > 1000000 })}
              currency='KWD'
            />
          </div>
          <div className='col-span-4 row-span-2 max-md:col-span-full'>
            <AmountCard
              title='Portfolio Value'
              value={formatCurrency(accountValue, { isCompact: accountValue > 1000000 })}
              currency='KWD'
              change={formatCurrency(lastMonthAccountValueChange, { isCompact: lastMonthAccountValueChange > 1000000 })}
              type={accountValue > lastMonthAccountValue ? 'up' : 'down'}
            />
          </div>
          <div className='col-span-4 row-span-2 max-md:col-span-full'>
            <AmountCard
              title='Monthly Yield'
              value={MonthlyYield.toFixed(2)}
              currency='%'
              change={lastMonthMonthlyYieldChange.toFixed(2)}
              type={MonthlyYield > lastMonthMonthlyYield ? 'up' : 'down'}
            />
          </div>

          {/* <div className='col-span-4 row-span-11 grid grid-cols-subgrid grid-rows-subgrid max-md:col-span-full max-md:grid-rows-none max-md:gap-4'>
            <div className='col-span-4 row-span-11 max-md:col-span-full'>
              <div className='box rounded-none'>
                <div className='relative flex size-full flex-col justify-center gap-2 overflow-hidden'>
                  <div className='mt-2 flex items-center justify-between'>
                    <h1 className='font-semibold text-muted-foreground'>Edit Profile</h1>
                  </div>
                  <div className='relative flex size-full flex-col justify-center gap-2 overflow-hidden rounded-lg border border-border bg-card'>
                    <div className='hide-scrollbar relative flex size-full flex-1 flex-col justify-start gap-2 overflow-y-auto rounded-lg p-2 max-md:overflow-y-visible'>
                      <UpdateProfileForm className='size-full p-3' />
                    </div>
                    <div className='pointer-events-none absolute bottom-0 left-0 h-10 w-full bg-gradient-to-b from-transparent to-card'></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Left column */}
          <div className='col-span-full row-span-11 grid grid-cols-subgrid grid-rows-subgrid max-md:col-span-full max-md:grid-rows-none max-md:gap-4'>
            <div className='col-span-full row-span-11 max-md:col-span-full'>
              <div className='box'>
                <div className='relative flex size-full flex-col justify-center gap-2 overflow-hidden pt-2'>
                  <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-muted-foreground'>Recent Transactions</h1>
                    {/* <div className='flex gap-2'>select</div> */}
                  </div>
                  <div className='relative flex size-full flex-col justify-center gap-2 overflow-hidden rounded-lg border border-border bg-card'>
                    <div className='hide-scrollbar relative flex h-full flex-1 flex-col justify-start gap-2 overflow-y-auto rounded-lg p-2 max-md:overflow-y-visible'>
                      <DataTable data={transactions} />
                    </div>
                    {/* <div className='pointer-events-none absolute bottom-0 left-0 h-10 w-full bg-gradient-to-b from-transparent to-card'></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </main>
    </SideBar>
  );
};

export default AccountPage;
