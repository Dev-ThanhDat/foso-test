interface IReaction {
  id: number;
  emoji: string;
  label: string;
}

export const rating: IReaction[] = [
  { id: 1, emoji: '/images/Frame-8.png', label: 'Hữu ích' },
  { id: 2, emoji: '/images/Frame-4.png', label: 'Yêu thích' },
  { id: 3, emoji: '/images/Frame-7.png', label: 'Thú vị' },
  { id: 4, emoji: '/images/Frame-5.png', label: 'Bất ngờ' },
  { id: 5, emoji: '/images/Frame-9.png', label: 'Nhàm chán' },
  { id: 6, emoji: '/images/Frame-6.png', label: 'Tức giận' }
];
