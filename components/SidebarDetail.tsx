'use client';

import SideBanner from '@/components/SideBanner';
import { contentList } from '@/utils/contentList';
import { memo, useCallback, useMemo, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const SidebarDetail = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const renderContentList = useMemo(() => {
    return contentList?.map((content, index) => (
      <li
        key={index}
        className='text-lg'
      >
        <span>
          {index + 1}. {content.title}
        </span>
        {content.children && content.children.length > 0 && (
          <ul className='ml-5 '>
            {content.children?.map((child, subIndex) => (
              <li
                key={subIndex}
                className=' ml-4'
              >
                {index + 1}.{subIndex + 1} {child}
              </li>
            ))}
          </ul>
        )}
      </li>
    ));
  }, []);

  return (
    <aside className='lg:p-0 lg:max-w-[492px] w-full order-1 lg:order-2 shrink-0'>
      <div
        onClick={toggleOpen}
        className='flex items-center justify-between mb-6 cursor-pointer'
      >
        <span className='font-extrabold text-2xl text-[var(--colorBlack)]'>
          Nội Dung Bài Viết
        </span>
        {isOpen ? (
          <IoIosArrowUp
            size={20}
            className='text-[var(--colorPrimary)]'
          />
        ) : (
          <IoIosArrowDown
            size={20}
            className='text-gray-500'
          />
        )}
      </div>
      {isOpen && <ul className='mb-6'>{renderContentList}</ul>}
      <SideBanner />
    </aside>
  );
};

export default memo(SidebarDetail);
