import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';
import { memo } from 'react';

interface IBreadcrumbPath {
  name: string;
  isBold: boolean;
}

const paths: IBreadcrumbPath[] = [
  { name: 'Trang chủ', isBold: false },
  { name: 'Tài nguyên', isBold: false },
  { name: 'Blog', isBold: true }
];

const Banner = () => {
  return (
    <section className='mt-[72px] mb-[112px] relative'>
      <Image
        src='/images/Frame-1.png'
        priority
        alt=''
        width={195}
        height={188}
        className='absolute top-2/4 -translate-y-1/2 left-0 hidden lg:block'
      />
      <div className='flex items-center justify-center mb-[72px]'>
        <Breadcrumbs paths={paths} />
      </div>

      <div className='text-center'>
        <h2 className='text-[64px] text-black leading-[100px]'>
          Blog{' '}
          <span className='text-transparent font-black bg-clip-text bg-gradient-to-r from-[var(--colorPrimary)] via-[var(--colorGreen-a3)] to-[var(--colorPrimary)]'>
            FOSO
          </span>{' '}
          –
        </h2>
        <h2 className='text-[64px] text-black relative inline-block'>
          Cập Nhật Tin Tức{' '}
          <span className='font-black relative'>
            Mới Nhất
            <span className='absolute left-0 bottom-[5px] w-full h-[25px] bg-[var(--colorGreen-a3)] -z-10 rounded-md'></span>
          </span>
        </h2>
        <p className='font-medium mt-2 text-[var(--colorGray)] text-lg'>
          Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
        </p>
      </div>
      <Image
        src='/images/Frame-2.png'
        alt=''
        width={195}
        height={188}
        className='absolute top-2/4 -translate-y-1/2 right-0 hidden lg:block'
        priority
      />
    </section>
  );
};

export default memo(Banner);
