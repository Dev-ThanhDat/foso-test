import ArticleCard from '@/components/ArticleCard';
import Banner from '@/components/Banner';
import Pagination from '@/components/Pagination';
import Sidebar from '@/components/Sidebar';
import { articles } from '@/utils/articles';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';

export default function Home() {
  return (
    <section className='relative'>
      <Image
        src={'/images/bg-1.png'}
        alt=''
        width={500}
        priority
        height={500}
        className='absolute top-0 left-0 z-[-1]'
      ></Image>
      <Banner />
      <main className='container flex gap-8 flex-col px-[15px] lg:px-0 md:flex-row pb-[92px]'>
        <section className='flex-1 order-2 lg:order-1'>
          <h2 className='font-extrabold text-4xl mb-6'>Tất cả bài viết</h2>

          <div className='relative p-[60px]  rounded-3xl bg-gradient-to-r from-[var(--colorBlur-01)] to-[var(--colorBlur)] text-white flex flex-col md:flex-row items-center justify-between'>
            <div className='max-w-[376px] w-full'>
              <h2 className='text-3xl md:text-4xl font-bold leading-tight'>
                Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
              </h2>
              <button className='mt-6 px-6 py-3 cursor-pointer border-2 border-white rounded-full text-white font-semibold flex items-center gap-2 hover:bg-white hover:text-[var(--colorBlur)] transition-all'>
                Tham Gia Ngay
                <GoArrowUpRight size={20} />
              </button>
            </div>
            <Image
              src='/images/Group.png'
              alt=''
              priority
              width={472}
              height={399}
              className='absolute right-5 bottom-0 hidden lg:block'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
            {articles?.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        </section>
        <Sidebar />
      </main>
      <Pagination />
      <Image
        src={'/images/bg-2.png'}
        priority
        alt=''
        width={500}
        height={500}
        className='absolute bottom-0 right-0 z-[-1]'
      ></Image>
    </section>
  );
}
