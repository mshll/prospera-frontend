'use client';

import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const chartData = [
  // First month - steady growth with small dip
  { date: '2024-04-01', accountValue: 220, monthlyYield: 150 },
  { date: '2024-04-05', accountValue: 235, monthlyYield: 158 },
  { date: '2024-04-10', accountValue: 215, monthlyYield: 145 }, // First dip
  { date: '2024-04-12', accountValue: 210, monthlyYield: 140 },
  { date: '2024-04-15', accountValue: 240, monthlyYield: 160 },
  { date: '2024-04-20', accountValue: 255, monthlyYield: 170 },
  { date: '2024-04-25', accountValue: 270, monthlyYield: 180 },
  { date: '2024-04-30', accountValue: 285, monthlyYield: 190 },

  // Second month - larger dip followed by recovery
  { date: '2024-05-05', accountValue: 300, monthlyYield: 200 },
  { date: '2024-05-10', accountValue: 250, monthlyYield: 170 }, // Major dip start
  { date: '2024-05-12', accountValue: 230, monthlyYield: 155 },
  { date: '2024-05-15', accountValue: 220, monthlyYield: 150 }, // Bottom
  { date: '2024-05-18', accountValue: 260, monthlyYield: 175 },
  { date: '2024-05-20', accountValue: 290, monthlyYield: 195 },
  { date: '2024-05-25', accountValue: 320, monthlyYield: 215 },
  { date: '2024-05-30', accountValue: 350, monthlyYield: 235 },

  // Third month - steady growth with minor volatility
  { date: '2024-06-05', accountValue: 380, monthlyYield: 255 },
  { date: '2024-06-10', accountValue: 360, monthlyYield: 240 }, // Small dip
  { date: '2024-06-12', accountValue: 370, monthlyYield: 248 },
  { date: '2024-06-15', accountValue: 400, monthlyYield: 270 },
  { date: '2024-06-20', accountValue: 420, monthlyYield: 285 },
  { date: '2024-06-25', accountValue: 445, monthlyYield: 300 },
  { date: '2024-06-30', accountValue: 470, monthlyYield: 315 },
];

const chartConfig = {
  accountValue: {
    label: 'Portfolio Value',
    color: 'hsl(var(--chart-1))',
  },
  monthlyYield: {
    label: 'Monthly Yield',
    color: 'hsl(var(--chart-2))',
  },
};

export function PortfolioChart() {
  const [timeRange, setTimeRange] = React.useState('90d');

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date('2024-06-30');
    let daysToSubtract = 90;
    if (timeRange === '30d') {
      daysToSubtract = 30;
    } else if (timeRange === '7d') {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className='flex size-full flex-col rounded-lg'>
      <CardHeader className='flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row'>
        <div className='grid flex-1 gap-1 text-center sm:text-left'>
          <CardTitle>Portfolio Summary</CardTitle>
          <CardDescription>Performance of your portfolio over time.</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className='w-[160px] rounded-lg sm:ml-auto' aria-label='Select a value'>
            <SelectValue placeholder='Last 3 months' />
          </SelectTrigger>
          <SelectContent className='rounded-lg'>
            <SelectItem value='90d' className='rounded-lg'>
              Last 3 months
            </SelectItem>
            <SelectItem value='30d' className='rounded-lg'>
              Last 30 days
            </SelectItem>
            <SelectItem value='7d' className='rounded-lg'>
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className='flex size-full px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer config={chartConfig} className='aspect-auto size-full min-h-[200px]'>
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id='fillAccountValue' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-accountValue)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-accountValue)' stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id='fillMonthlyYield' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-monthlyYield)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-monthlyYield)' stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                return value.toLocaleString('en-US', {
                  maximumFractionDigits: 0,
                });
              }}
            />
            {/* <ChartTooltip
              cursor={true}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    });
                  }}
                  indicator='line'
                />
              }
            /> */}
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className='w-[180px]'
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    });
                  }}
                  formatter={(value, name, item, index) => (
                    <>
                      <div
                        className='h-2.5 w-1 shrink-0 rounded-[2px] bg-[--color-bg]'
                        style={{
                          '--color-bg': `var(--color-${name})`,
                        }}
                      />
                      {chartConfig[name]?.label || name}
                      <div className='ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground'>
                        {value}
                        <span className='font-normal text-muted-foreground'>KWD</span>
                      </div>
                      {/* Add this after the last item */}
                      {/* {index === 1 && (
                        <div className='mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground'>
                          Total
                          <div className='ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground'>
                            {item.payload.accountValue + item.payload.monthlyYield}
                            <span className='font-normal text-muted-foreground'>KWD</span>
                          </div>
                        </div>
                      )} */}
                    </>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
            <Area
              dataKey='accountValue'
              type='natural'
              fill='url(#fillAccountValue)'
              stroke='var(--color-accountValue)'
              stackId='a'
            />
            <Area
              dataKey='monthlyYield'
              type='natural'
              fill='url(#fillMonthlyYield)'
              stroke='var(--color-monthlyYield)'
              stackId='b'
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
