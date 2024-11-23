import { Heart, Share2 } from 'lucide-react';

const PropertyMainSection = () => {
  return (
    <div className='col-span-2 bg-red-400'>
      <div className='flex justify-between'>
        <div>
          <h1>The house of yousef in jabrriya</h1>
        </div>
        <div className='flex gap-2'>
          <Share2 />
          <Heart />
        </div>
      </div>
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit itaque dolorem repellat similique
          voluptatibus obcaecati! Vero, consequatur nostrum. Similique voluptate assumenda asperiores dignissimos ut,
          impedit soluta facilis maxime? Facilis expedita numquam deserunt amet. Illum aspernatur commodi voluptates
          impedit non laudantium, blanditiis, quo molestiae dolorem dolorum animi doloremque culpa voluptatibus!
        </h1>
      </div>

      <div>
        <p>Potential Re</p>
      </div>

      <div className='mt-40'></div>
    </div>
  );
};

export default PropertyMainSection;
