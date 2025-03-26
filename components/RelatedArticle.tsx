import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/utils/articles';
import { memo } from 'react';

const RelatedArticle = () => {
  return (
    <section className='mb-10'>
      <h2 className='font-extrabold text-4xl mb-6'>Bài viết liên quan</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6'>
        {articles?.slice(0, 3)?.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(RelatedArticle);
