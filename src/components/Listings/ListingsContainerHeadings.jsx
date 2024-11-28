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

const ListingsContainerHeadings = ({
  setSearchTerm,
  searchTerm,
  totalProperties,
  totalPropertiesShown,
  filterOptions,
  selectedFilter,
  setSelectedFilter,

  onSearchChange,
}) => {
  return (
    <>
      <div className='mt-4 space-y-4'>
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
        <div className='relative'>
          <Input
            onChange={onSearchChange}
            placeholder='Search for a city or property...'
            className='bg-secondary-primary w-full py-2 pl-10 pr-4 focus:border-transparent'
          />
          <SearchIcon className='text absolute left-3 top-1/2 -translate-y-1/2 transform' />
        </div>

        {searchTerm ? (
          <h1 className='pt-2 text-3xl font-medium text-secondary-foreground'>
            Showing Results for <span className='font-semibold text-primary'>&quot;{searchTerm}&quot;</span>
          </h1>
        ) : (
          <h1 className='pt-2 text-3xl font-medium leading-tight text-secondary-foreground'>
            Explore properties and start earning rent
          </h1>
        )}

        <div className='mb-3 flex items-center justify-end gap-3'>
          <div className='text-xs text-muted-foreground'>Filter by type:</div>
          <div>
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className='w-[180px] bg-background'>
                <SelectValue placeholder='Filter' />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.map((item) => (
                  <SelectItem key={item} value={item} variant='outline'>
                    {item}
                  </SelectItem>

                  // <Button
                  //   key={item}
                  //   variant='outline'
                  //   className={clsx(
                  //     'h-8 w-28 rounded-lg text-sm transition duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground',
                  //     selectedFilter === item && 'bg-primary text-primary-foreground',
                  //   )}
                  //   onClick={() => setSelectedFilter(item)}
                  // >
                  //   {item}
                  // </Button>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className='hidden'>
        <ListingsHeaderButtonsSection
          filterOptions={filterOptions}
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
        />
      </div>
      <div className=''>
        <p className='font-medium text-muted-foreground'>
          <span className='text-primary'>{totalPropertiesShown}</span> of{' '}
          <span className='text-primary'>{totalProperties}</span> properties available
        </p>
      </div>
    </>
  );
};

export default ListingsContainerHeadings;
