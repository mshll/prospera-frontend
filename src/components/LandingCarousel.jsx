import LogoCarousel from '@/components/LogoCarousel';

import BoubyanLogo from '@/images/logos/boubyan-logo.png';
import CodedLogo from '@/images/logos/coded-logo.svg';
import AppleLogo from '@/images/logos/apple-logo.svg';
import BloombergLogo from '@/images/logos/bloomberg-logo.svg';
import GoogleLogo from '@/images/logos/google-logo.svg';
import InvestopediaLogo from '@/images/logos/Investopedia-logo.png';
import NerdwalletLogo from '@/images/logos/nerdwallet-logo.png';

const carouselItems = [
  { text: 'Boubyan', image: BoubyanLogo },
  { text: 'CODED', image: CodedLogo },
  { text: 'Investopedia', image: InvestopediaLogo },
  { text: 'Nerdwallet', image: NerdwalletLogo },
  { text: 'Apple', image: AppleLogo },
  { text: 'Bloomberg', image: BloombergLogo },
  { text: 'Google', image: GoogleLogo },
];

function LandingCarousel() {
  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-6 pb-32'>
      <h2 className='text-center text-2xl font-semibold max-sm:px-6'>Trusted by leading companies</h2>
      <LogoCarousel items={carouselItems} length={7} />
    </div>
  );
}
export default LandingCarousel;
