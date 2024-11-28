import clsx from 'clsx';
import { TrendingDownIcon, TrendingUpIcon, Wallet2Icon } from 'lucide-react';

const AmountCard = ({ title, value, currency, change, type }) => {
  const Icon = type === 'up' ? TrendingUpIcon : TrendingDownIcon;
  const changeClass = type === 'up' ? 'text-success' : 'text-destructive';

  return (
    <div className='box border-none'>
      <div className='flex size-full flex-col justify-start gap-5'>
        <div className='flex justify-between'>
          <h1 className='mb-2 text-xs font-semibold text-muted-foreground'>{title}</h1>
          {change ? (
            <Icon className={clsx('mx-5 size-4', changeClass)} />
          ) : (
            <Wallet2Icon className='mx-5 size-4 text-muted-foreground' />
          )}
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-5xl font-semibold'>
            {value} <span className='font-mono text-lg text-muted-foreground'>{currency}</span>
          </p>
        </div>
        {change ? (
          <div className={clsx('flex items-center justify-start gap-2 text-sm', changeClass)}>
            {type === 'up' ? `+${change}` : `-${change}`}{' '}
            <span className='text-muted-foreground'>Since last month</span>
          </div>
        ) : (
          <div className='flex items-center justify-start gap-2 text-sm text-muted-foreground'>Available balance</div>
        )}
      </div>
    </div>
  );
};

export default AmountCard;
