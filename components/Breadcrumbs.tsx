import { memo } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

interface IPath {
  name: string;
  isBold?: boolean;
}

interface IBreadcrumbsProps {
  paths: IPath[];
}

const Breadcrumbs = ({ paths }: IBreadcrumbsProps) => {
  return (
    <div className='flex items-center'>
      {paths?.map((path, index) => (
        <div
          key={index}
          className='flex items-center'
        >
          <span className={path.isBold ? 'font-bold' : ''}>{path.name}</span>
          {index < paths.length - 1 && (
            <MdOutlineArrowForwardIos
              size={10}
              className='mx-1'
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default memo(Breadcrumbs);
