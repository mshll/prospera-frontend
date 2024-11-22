'use client';

import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
  { property: 'homes', propertiesOwned: 2, fill: 'var(--color-homes)' },
  { property: 'apartments', propertiesOwned: 3, fill: 'var(--color-apartments)' },
  { property: 'condos', propertiesOwned: 4, fill: 'var(--color-condos)' },
  { property: 'villas', propertiesOwned: 5, fill: 'var(--color-villas)' },
  { property: 'industrial', propertiesOwned: 6, fill: 'var(--color-industrial)' },
];

const chartConfig = {
  propertiesOwned: {
    label: 'Properties Owned',
  },
  homes: {
    label: 'Homes',
    color: 'hsl(var(--chart-1))',
  },
  apartments: {
    label: 'Apartments',
    color: 'hsl(var(--chart-2))',
  },
  condos: {
    label: 'Condos',
    color: 'hsl(var(--chart-3))',
  },
  villas: {
    label: 'Villas',
    color: 'hsl(var(--chart-4))',
  },
  industrial: {
    label: 'Industrial',
    color: 'hsl(var(--chart-5))',
  },
};

export function PropertyChart() {
  const totalPropertiesOwned = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.propertiesOwned, 0);
  }, []);

  return (
    <Card className='flex size-full flex-col border-none bg-transparent shadow-none'>
      <CardContent className='size-full flex-1 p-0'>
        <div className='flex justify-between'>
          <h1 className='text-xs font-bold uppercase text-muted-foreground'>Properties Overview</h1>
        </div>
        <ChartContainer config={chartConfig} className='flex aspect-auto size-full min-h-[100px] flex-row'>
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel indicator='line' />} />
            <Pie data={chartData} dataKey='propertiesOwned' nameKey='property' innerRadius={35} strokeWidth={5}>
              <Label
                value={totalPropertiesOwned.toLocaleString()}
                position='center'
                className='fill-foreground text-xl font-bold'
              />
            </Pie>
            <ChartLegend
              layout='vertical'
              align='right'
              verticalAlign='middle'
              content={<ChartLegendContent nameKey='property' />}
              className='flex -translate-y-2 flex-col items-start justify-start gap-2 text-muted-foreground [&>*]:basis-1/4 [&>*]:justify-center'
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
