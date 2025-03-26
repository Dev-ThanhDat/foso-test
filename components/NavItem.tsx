import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';

interface INavItems {
  item: { label: string; link: string; hasDropdown?: boolean };
  active: string;
  setActive: (label: string) => void;
}

const NavItem = ({ item, active, setActive }: INavItems) => {
  return (
    <li
      className='relative group'
      onClick={() => setActive(item.label)}
    >
      <Link
        href={item.link}
        className={`relative flex items-center gap-1 after:absolute after:content-[''] after:w-2 after:h-2 after:rounded-full after:-bottom-2 after:transition-all after:left-1/2 after:-translate-x-1/2 ${
          active === item.label
            ? 'font-bold after:bg-[var(--colorPrimary)]'
            : 'after:bg-transparent font-medium hover:after:bg-[var(--colorPrimary)]'
        }`}
      >
        {item.label}
        {item.hasDropdown && <BiChevronDown size={16} />}
      </Link>
    </li>
  );
};

export default NavItem;
