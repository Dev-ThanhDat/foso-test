'use client';

import SideBanner from '@/components/SideBanner';
import { categories } from '@/utils/categories';
import { memo, useCallback, useMemo, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const Sidebar = () => {
  const [search, setSearch] = useState<string>('');

  const categoryList = useMemo(
    () =>
      categories?.map((category, index) => (
        <li
          key={index}
          className='flex justify-between not-last:pb-2 not-last:mb-2 not-last:border-b not-last:border-b-gray-100 font-medium text-lg text-[var(--colorGray)] cursor-pointer'
        >
          <span>{category.name}</span>
          <span className='text-gray-400'>{category.count}</span>
        </li>
      )),
    []
  );

  const handleSearch = useCallback(() => {
    alert(search);
    setSearch('');
  }, [search]);

  return (
    <aside className='lg:p-0 lg:max-w-[366px] w-full order-1 lg:order-2 shrink-0'>
      <div className='mb-8'>
        <h3 className='font-extrabold text-2xl mb-6'>Tìm Kiếm</h3>
        <div className='px-4 flex items-center gap-1 py-3 bg-white rounded-[12px] shadow-[0px_12px_24px_-4px_#919eaba8]'>
          <input
            type='text'
            placeholder='Tìm kiếm bài viết'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='bg-transparent outline-none flex-1'
          />
          <button
            onClick={handleSearch}
            className='w-[48px] text-white h-[48px] rounded-xl flex items-center justify-center bg-[var(--colorSecondary)]'
          >
            <CiSearch size={25} />
          </button>
        </div>
      </div>

      <div className='mb-10'>
        <h3 className='font-extrabold text-2xl mb-6'>Danh Mục</h3>
        <ul className='space-y-3'>{categoryList}</ul>
      </div>

      <SideBanner />
    </aside>
  );
};

export default memo(Sidebar);
