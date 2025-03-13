import { shareLinks } from '@/utils/shareLinks';
import Image from 'next/image';
import Link from 'next/link';

const ShareButtons = () => {
  return (
    <div className='flex flex-col items-center gap-3 fixed left-5 top-1/3'>
      <span className='font-extrabold text-base'>Chia sẻ</span>
      {shareLinks?.map(({ icon, url }, index) => (
        <Link
          key={index}
          href={url}
          target='_blank'
          className='p-3 w-[48px] h-[48px] bg-white flex items-center justify-center rounded-2xl border border-[var(--colorSecondary)]'
        >
          <Image
            src={icon}
            priority
            alt=''
            width={icon === '/images/icon-2.png' ? 15 : 24}
            height={24}
          ></Image>
        </Link>
      ))}
    </div>
  );
};

export default ShareButtons;
