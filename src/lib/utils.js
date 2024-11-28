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

export function getPropertyTypes(properties) {
  const types = properties.map((property) => property.typeOfProperty);
  return [...new Set(types)];
}

export function calculateAccountValue(investments) {
  return investments.reduce((acc, investment) => {
    const shareValue = investment.property.currentValue / investment.property.totalShares;
    const investmentValue = shareValue * investment.sharesOwned;
    return acc + investmentValue;
  }, 0);
}

export function calculateTotalMonthlyYield(investments) {
  return investments.reduce((acc, investment) => {
    const monthlyYield = calculateMonthlyIncome({
      rentalIncome: investment.property.rentalIncome,
      sharesOwned: investment.sharesOwned,
      totalShares: investment.property.totalShares,
      currentValue: investment.property.currentValue,
      asYield: true,
    });
    return acc + parseFloat(monthlyYield);
  }, 0);
}

export function calculateLastMonthAccountValue(investments) {
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  return investments.reduce((acc, investment) => {
    const shareValue = investment.property.currentValue / investment.property.totalShares;
    const investmentValue = shareValue * investment.sharesOwned;
    const valueDate = new Date(investment.createdAt);

    if (valueDate < lastMonth) {
      return acc + investmentValue;
    }

    return acc;
  }, 0);
}
