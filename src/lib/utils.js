import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getGreeting() {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12) {
    return 'Good Morning';
  } else if (hours < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}

export function formatCurrency(amount, config = { isCompact: true, locale: 'en-KW', includeCurrency: false }) {
  const { isCompact, locale, includeCurrency } = config;

  const formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'KWD',
    notation: isCompact ? 'compact' : 'standard',
    maximumFractionDigits: 2,
  }).format(amount);

  return formatted.replace('KWD', '').replace(/\D00(?=\D*$)/, '') + (includeCurrency ? 'KWD' : '');
}

export function calculateMonthlyIncome({ rentalIncome, sharesOwned, totalShares, currentValue, asYield = true }) {
  const monthlyIncome = rentalIncome * (sharesOwned / totalShares);
  const monthlyYield = (monthlyIncome / (currentValue * (sharesOwned / totalShares))) * 100;

  return asYield ? monthlyYield.toFixed(2) : formatCurrency(monthlyIncome);
}
