import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Button from '@/components/ui/button';
import ListingsHeaderButtonsSection from './ListingsHeaderButtonsSection';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ListingsContainerHeadings = () => {
  return (
    <>
      <div className='mt-4 space-y-4'>
        <div className='relative'>
          <Input placeholder='Search for a city or property...' className='py-2 pl-10 pr-4 focus:border-transparent' />
          <SearchIcon className='text absolute left-3 top-1/2 -translate-y-1/2 transform' />
        </div>
        <Breadcrumb className='text-muted-foreground'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/properties'>Properties</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/kuwait-city'>Kuwait City</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className='text-3xl font-medium text-secondary-foreground'>
          Available for Investment in <span className='font-semibold text-primary'>"Kuwait City"</span>
        </h1>

        <div className='flex justify-between'>
          <div>
            <p className='font-medium text-muted-foreground'>
              <span className='text-primary'>14</span> of <span className='text-primary'>144</span> properties available
            </p>
          </div>
          <div className='block sm:hidden'>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Theme' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='light'>Light</SelectItem>
                <SelectItem value='dark'>Dark</SelectItem>
                <SelectItem value='system'>System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <ListingsHeaderButtonsSection />
    </>
  );
};

export default ListingsContainerHeadings;
