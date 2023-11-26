import {
  faBell,
  faBus,
  faCog,
  faHome,
  faIdBadge,
  faRightFromBracket,
  faRoute,
  faTicket,
} from '@fortawesome/free-solid-svg-icons';
import SideMenuItem from './side-menu-item';

export default function Sidemenu() {
  return (
    <nav className='fixed top-0 left-0 bottom-0 flex flex-col justify-stretch w-[8rem] border-0 border-r-[0.5px] border-solid border-muted-200'>
      <div className='flex-grow-[8] flex flex-col items-center justify-center gap-[2.8rem]'>
        <SideMenuItem href='/' icon={faHome} />
        <SideMenuItem href='/drivers' icon={faIdBadge} />
        <SideMenuItem href='/busses' icon={faBus} />
        <SideMenuItem href='/trips' icon={faTicket} />
        <SideMenuItem href={null} icon={faRoute} />
        <SideMenuItem href='/notifications' icon={faBell} />
      </div>

      <div className='flex-grow-[2] flex flex-col items-center justify-center gap-[2.8rem] border-0 border-t-[0.5px] border-solid border-muted-200'>
        <SideMenuItem href={null} icon={faCog} />
        <SideMenuItem href={null} icon={faRightFromBracket} />
      </div>
    </nav>
  );
}
