interface INavItem {
  label: string;
  link: string;
  hasDropdown?: boolean;
}

export const navItems: INavItem[] = [
  { label: 'Về Chúng Tôi', link: '#' },
  { label: 'Giải Pháp', link: '#', hasDropdown: true },
  { label: 'Tài Nguyên', link: '#', hasDropdown: true },
  { label: 'Liên Hệ', link: '#' }
];
