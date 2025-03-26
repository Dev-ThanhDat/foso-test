import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { CiCalendar, CiClock2 } from 'react-icons/ci';
import { MdOutlineArrowForward } from 'react-icons/md';

interface IArticle {
  id: number;
  title: string;
  date: string;
  timeRead: string;
  image: string;
}

interface IArticleCardProps {
  article: IArticle;
}

const ArticleCard = ({ article }: IArticleCardProps) => {
  return (
    <div>
      <Image
        src={article?.image}
        alt={article?.title}
        priority
        width={505}
        height={475}
        className='rounded-3xl object-cover'
      />
      <div className='mt-6'>
        <span className='text-xs bg-blue-100 font-medium text-[var(--colorBlur-0f)] px-2 py-1 rounded-full'>
          Quản Lý Sản Xuất
        </span>
        <h3 className='text-[var(--colorGray)] my-4 font-extrabold text-2xl'>
          {article?.title}
        </h3>
        <div className='flex items-center mb-4'>
          <div className='pr-3 mr-3 border-r flex text-[var(--textGray)] border-r-gray-300 items-center gap-2'>
            <CiCalendar size={20} />{' '}
            <span className='font-medium text-base '>{article?.date}</span>
          </div>
          <div className=' flex  items-center gap-2 text-[var(--textGray)]'>
            <CiClock2 size={20} />{' '}
            <span className='font-medium text-base '>{article?.timeRead}</span>
          </div>
        </div>
        <Link
          href={`/blog/${article?.title}`}
          className='flex items-center gap-4  text-[var(--textGray)]'
        >
          <span className=' text-lg font-semibold'>Khám phá thêm </span>
          <span>
            <MdOutlineArrowForward size={23} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default memo(ArticleCard);
