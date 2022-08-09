import { MenuIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import UserMenu from 'layout/user-menu';
import Bunny from '../../public/bunny.png';

const Header = () => (
  <div className="w-full h-16 flex bg-secondary text-white relative z-10">
    <div className="flex items-center px-5 w-full">
      <MenuIcon height={24} className="mr-5" />
      <div className="w-10 h-10 relative">
        <Image src={Bunny} alt="Clipboard Health logo" layout="fill" />
      </div>
      <div className="ml-4 text-2xl">MACT</div>
      <div className="ml-auto">
        <UserMenu />
      </div>
    </div>
  </div>
);

export default Header;
