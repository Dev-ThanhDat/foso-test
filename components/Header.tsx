'use client';

import NavItem from '@/components/NavItem';
import { navItems } from '@/utils/navList';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { GoArrowUpRight } from 'react-icons/go';

const Header = () => {
  const [active, setActive] = useState<string>('Tài nguyên');

  const handleSetActive = useCallback((label: string) => {
    setActive(label);
  }, []);

  const navList = useMemo(
    () =>
      navItems?.map((item) => (
        <NavItem
          key={item.label}
          item={item}
          active={active}
          setActive={handleSetActive}
        />
      )),
    [active, handleSetActive]
  );

  return (
    <header className='max-w-[1280px] w-full p-[15px] mx-auto flex items-center justify-between mt-6 bg-white lg:px-[150px] rounded-full shadow-[0px_2px_83.95px_0px_rgba(0,0,0,0.2)] py-3'>
      <Link
        href='/'
        className='w-[134px] shrink-0'
      >
        <Image
          src='/images/Logo.png'
          alt='Logo'
          priority
          width={134}
          height={55}
          className='w-full h-full object-cover '
        />
      </Link>

      <ul className='lg:flex space-x-6 text-gray-700 font-medium hidden'>
        {navList}
      </ul>

      <div className='flex items-center space-x-4'>
        <button className='hidden md:flex cursor-pointer items-center gap-3 px-3 border border-gray-300 py-2 bg-gray-100 rounded-full'>
          <Image
            src='/images/icon_country.png'
            alt='image country'
            priority
            width={24}
            height={24}
            className='w-6 h-6 object-cover'
          />
          <div className='flex items-center gap-[6px]'>
            <span className='font-medium'>VI</span>
            <BiChevronDown size={20} />
          </div>
        </button>

        <Link
          href='/#'
          className='shrink-0 flex items-center gap-2 cursor-pointer text-black font-bold px-4 py-2 rounded-full border border-[var(--colorGreen-a3)] bg-[var(--colorPrimary)] hover:opacity-85 transition-all'
        >
          <span>Trở Thành Khách Hàng</span>
          <span className='bg-black text-white rounded-full w-[22px] h-[22px] flex items-center justify-center'>
            <GoArrowUpRight size={15} />
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
