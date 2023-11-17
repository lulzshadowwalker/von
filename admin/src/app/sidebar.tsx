import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import SideMenuItem from './sidemenu-item';

export default function SideMenu() {
  return (
    <nav className='fixed left-0 flex flex-col justify-strech w-[8rem] border-0 border-r-[0.5px] border-solid border-muted-200'>
      <div className='flex-grow flex flex-col items-center justify-center'>
        <SideMenuItem href="/" icon={faHome} />
        <SideMenuItem href="/" icon={faHome} />
        <SideMenuItem href="/" icon={faHome} />
      </div>

      <div className='h-[20%] flex flex-col items-center justify-center gap-[2.8rem] border-0 border-t-[0.5px] border-solid border-muted-200'>
        <SideMenuItem href="/" icon={faHome} />
        <SideMenuItem href="/" icon={faHome} />
      </div>
    </nav>
  );
}
