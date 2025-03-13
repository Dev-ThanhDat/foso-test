'use client';

import { useCallback, useState } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { IoArrowBackSharp } from 'react-icons/io5';

const Pagination = ({ totalPages = 10 }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    },
    [totalPages]
  );

  return (
    <section className='container flex items-center justify-between w-full py-4'>
      <button
        className={`flex items-center text-[#4D5F6E] gap-2 font-semibold text-base ${
          currentPage === 1
            ? 'cursor-not-allowed text-[#B3C5D4]'
            : ' cursor-pointer'
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoArrowBackSharp size={20} />
        Trang trước
      </button>

      <div className='flex items-center gap-[2px]'>
        {[1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages]?.map(
          (page, index) => (
            <button
              key={index}
              className={`w-10 h-10 rounded-lg font-semibold text-base transition-all ${
                page === currentPage
                  ? 'bg-[#D1F7EA]'
                  : 'hover:bg-[#D1F7EA] cursor-pointer text-[#809FB8]'
              }`}
              onClick={() => typeof page === 'number' && handlePageChange(page)}
              disabled={typeof page !== 'number'}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        className={`flex items-center text-[#4D5F6E] gap-2 font-semibold text-base ${
          currentPage === totalPages
            ? 'cursor-not-allowed text-[#B3C5D4]'
            : ' cursor-pointer'
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Trang kế tiếp
        <IoMdArrowForward size={20} />
      </button>
    </section>
  );
};

export default Pagination;
