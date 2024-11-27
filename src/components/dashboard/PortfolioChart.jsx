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

export function PortfolioChart({ chartData }) {
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
    <div className='relative flex size-full flex-col justify-center gap-2 overflow-hidden pt-2'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-muted-foreground'>Portfolio Summary</h1>
        <div className='flex gap-2'>
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
        </div>
      </div>
      <Card className='flex size-full flex-col rounded-lg'>
        {/* <CardHeader className='flex items-start gap-2 space-y-0 border-b py-5 sm:flex-row'>
        <div className='grid flex-1 gap-1 sm:text-left'>
          <CardTitle>Portfolio Summary</CardTitle>
          <CardDescription>Performance of your portfolio over time.</CardDescription>
        </div>
      </CardHeader> */}
        <CardContent className='flex size-full px-2 pt-4 sm:px-6 sm:pt-6'>
          <ChartContainer config={chartConfig} className='aspect-auto size-full min-h-[100px]'>
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
                          <span className='text-muted-foreground'>KWD</span>
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
                cursor={true}
                defaultIndex={1}
              />
              <Area
                dataKey='accountValue'
                type='natural'
                fill='url(#fillAccountValue)'
                stroke='var(--color-accountValue)'
                stackId='a'
                isAnimationActive={true}
              />
              <Area
                dataKey='monthlyYield'
                type='natural'
                fill='url(#fillMonthlyYield)'
                stroke='var(--color-monthlyYield)'
                stackId='b'
                isAnimationActive={true}
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
