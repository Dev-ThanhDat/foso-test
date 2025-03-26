import Breadcrumbs from '@/components/Breadcrumbs';
import DetailContent from '@/components/DetailContent';
import Feedback from '@/components/Feedback';
import RelatedArticle from '@/components/RelatedArticle';
import ShareButtons from '@/components/ShareButtons';
import SidebarDetail from '@/components/SidebarDetail';
import Image from 'next/image';
import Link from 'next/link';
import { CiCalendar, CiClock2 } from 'react-icons/ci';

const paths = [
  { name: 'Trang chủ', isBold: false },
  { name: 'Tài nguyên', isBold: false },
  { name: 'Blog', isBold: false },
  { name: 'Quản lý sản xuất', isBold: true }
];

const BlogDetail = () => {
  return (
    <section className='container pt-8 px-[15px] lg:px-0 relative'>
      <ShareButtons />
      <Breadcrumbs paths={paths} />
      <div className='flex mt-[72px] flex-col lg:flex-row gap-[48px] mb-[48px]'>
        <main className='flex-1 order-2 lg:order-1'>
          <span className='text-xs font-medium bg-blue-100 text-[var(--colorBlur-0f)] px-2 py-1 rounded-full'>
            Quản Lý Sản Xuất
          </span>
          <h1 className='text-[var(--colorBlack)] my-4 font-extrabold text-4xl'>
            Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
          </h1>
          <div className='flex items-start md:items-center gap-5 justify-between mb-6 flex-col md:flex-row'>
            <div className='flex items-center gap-3'>
              <Link
                href={'/#'}
                className='p-4 rounded-full bg-white border border-[var(--colorGray-f1)]'
              >
                <Image
                  src={'/images/Logo-pattern.png'}
                  priority
                  alt=''
                  width={33}
                  height={32}
                ></Image>
              </Link>
              <div className='flex flex-col gap-1'>
                <span className='font-medium text-[var(--textGray)]'>
                  Tác giả
                </span>
                <p className='font-bold text-[var(--colorGray)]'>
                  FOSO Creator
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='pr-3 mr-3 border-r flex text-[var(--textGray)] border-r-gray-300 items-center gap-2'>
                <CiCalendar size={20} />{' '}
                <span className='font-medium text-base '>
                  Cập nhật vào: 17/11/2022
                </span>
              </div>
              <div className=' flex  items-center gap-2 text-[var(--textGray)]'>
                <CiClock2 size={20} />{' '}
                <span className='font-medium text-base '>10 phút đọc</span>
              </div>
            </div>
          </div>
          <DetailContent />
          <Feedback />
        </main>
        <SidebarDetail />
      </div>
      <RelatedArticle />
    </section>
  );
};

export default BlogDetail;
