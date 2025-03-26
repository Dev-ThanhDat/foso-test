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
    <section className='container flex flex-col md:flex-row gap-5 items-center justify-between w-full py-4'>
      <button
        className={`flex items-center text-[var(--colorGray-4d)] gap-2 font-semibold text-base ${
          currentPage === 1
            ? 'cursor-not-allowed text-[var(--colorGray-b3)]'
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
                  ? 'bg-[var(--colorGreen-d1)]'
                  : 'hover:bg-[var(--colorGreen-d1)] cursor-pointer text-[var(--colorBlur-80)]'
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
        className={`flex items-center text-[var(--colorGray-4d)] gap-2 font-semibold text-base ${
          currentPage === totalPages
            ? 'cursor-not-allowed text-[var(--colorGray-b3)]'
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
