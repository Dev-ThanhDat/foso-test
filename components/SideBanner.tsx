import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';

const SideBanner = () => {
  return (
    <>
      <div className=' md:max-w-[366px] w-full mb-8 bg-gradient-to-tr rounded-2xl overflow-hidden from-[#013DA0] flex flex-col to-[var(--colorBlur)]'>
        <Image
          src={'/images/aside-1.png'}
          priority
          alt=''
          width={425}
          height={262}
          className='w-full object-cover pl-6 my-[30px] '
        />
        <div className='px-6 py-[60px]'>
          <div className='flex items-center justify-between mb-[54px]'>
            <Image
              src={'/images/aside-2.png'}
              alt=''
              width={136}
              priority
              height={136}
            />
            <div className='flex flex-col items-end'>
              <span className='font-bold text-xl mb-3 text-white'>
                Miễn phí dùng thử
              </span>
              <Image
                src={'/images/aside-3.png'}
                priority
                alt=''
                width={154}
                height={45}
                className='w-full object-cover'
              />
            </div>
          </div>
          <button className='py-[14px] px-6 cursor-pointer rounded-full border w-full flex items-center justify-between gap-1 text-white font-bold border-white hover:bg-white hover:text-[var(--colorBlur)] transition-all'>
            <span>Trải nghiệm ngay</span>
            <GoArrowUpRight size={20} />
          </button>
        </div>
      </div>

      <div className='mb-8 bg-gradient-to-tr md:max-w-[366px] w-full rounded-2xl overflow-hidden from-[#013DA0] to-[var(--colorBlur)]'>
        <Image
          src={'/images/aside-4.png'}
          priority
          alt=''
          width={472}
          height={399}
          className='mb-[23px] mt-5'
        />
        <div className='px-6 py-[60px]'>
          <p className='font-bold text-xl mb-3 text-white'>
            Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!
          </p>
          <button className='py-[14px] px-6 rounded-full cursor-pointer border w-full flex items-center justify-between gap-1 text-white font-bold border-white hover:bg-white hover:text-[var(--colorBlur)] transition-all'>
            <span>Tham gia ngay</span>
            <GoArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBanner;
