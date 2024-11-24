'use server';

import { revalidatePath } from 'next/cache';
import { baseUrl, getHeaders } from './config';

export const getAllProperties = async () => {
  // Dummy array of properties in Kuwait
  const properties = [
    {
      id: 1,
      name: 'Salmiya Apartment',
      location: 'Salmiya, Kuwait',
      description: 'A beautiful apartment in Salmiya.',
      totalShares: 100,
      value: 120000,
      rentalIncome: 600,
      longitude: 48.0717,
      latitude: 29.3333,
      type: 'Apartments',
    },
    {
      id: 2,
      name: 'Kuwait City Villa',
      location: 'Kuwait City, Kuwait',
      description: 'A luxurious villa in Kuwait City.',
      totalShares: 200,
      value: 500000,
      rentalIncome: 2500,
      longitude: 47.9783,
      latitude: 29.3759,
      type: 'Villas',
    },
    {
      id: 3,
      name: 'Hawally Office Space',
      location: 'Hawally, Kuwait',
      description: 'A spacious office space in Hawally.',
      totalShares: 150,
      value: 300000,
      rentalIncome: 1500,
      longitude: 48.0,
      latitude: 29.3339,
      type: 'Industrial',
    },
    {
      id: 4,
      name: 'Fintas Condo',
      location: 'Fintas, Kuwait',
      description: 'A modern condo in Fintas.',
      totalShares: 120,
      value: 200000,
      rentalIncome: 1000,
      longitude: 48.1212,
      latitude: 29.1736,
      type: 'Condos',
    },
    {
      id: 5,
      name: 'Mishref Home',
      location: 'Mishref, Kuwait',
      description: 'A cozy home in Mishref.',
      totalShares: 180,
      value: 400000,
      rentalIncome: 2000,
      longitude: 48.05,
      latitude: 29.285,
      type: 'Homes',
    },
  ];

  return properties;
};

export const getMyInvestments = async () => {
  const investments = [
    {
      name: 'John Doe',
      propertyId: 1,
      sharesOwned: 50,
      investmentDate: new Date('2023-01-01'),
      amountInvested: 60000.0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Jane Smith',
      propertyId: 2,
      sharesOwned: 100,
      investmentDate: new Date('2023-02-15'),
      amountInvested: 120000.0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return investments;
};
