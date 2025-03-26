'use client';

import { rating } from '@/utils/rating';
import Image from 'next/image';
import { memo, useCallback, useMemo, useState } from 'react';

const Feedback = () => {
  const [counts, setCounts] = useState<Record<number, number>>({
    1: 1,
    2: 2,
    3: 0,
    4: 1,
    5: 0,
    6: 0
  });

  const [selected, setSelected] = useState<number | null>(1);

  const totalFeedback = useMemo(
    () => Object.values(counts).reduce((a, b) => a + b, 0),
    [counts]
  );

  const handleClick = useCallback((id: number) => {
    setCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    setSelected(id);
  }, []);

  return (
    <div className='bg-white p-6 rounded-2xl mt-[72px] shadow-md w-full text-center'>
      <h3 className='font-extrabold text-xl mt-1'>
        Bạn thấy bài viết như thế nào?
      </h3>
      <p className='font-medium text-base text-[var(--colorGray)] mb-6'>
        {totalFeedback} phản hồi
      </p>

      <div className='flex justify-center flex-wrap gap-8'>
        {rating?.map((reaction) => (
          <button
            key={reaction.id}
            onClick={() => handleClick(reaction.id)}
            className={`flex flex-col cursor-pointer items-center px-5 py-1 rounded-[4px] border transition ${
              selected === reaction.id
                ? 'border-[var(--colorGreen-10)] text-[var(--colorGreen-10)]'
                : 'border-transparent'
            }`}
          >
            <Image
              src={reaction.emoji}
              alt={reaction.label}
              priority
              width={48}
              height={48}
            />
            <span className='font-bold'>{counts[reaction.id]}</span>
            <span className='text-xs'>{reaction.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(Feedback);
