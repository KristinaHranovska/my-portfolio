import { useState } from 'react';
import posts from 'shared/data/posts';
import style from './BlogComponent.module.scss';

const BlogComponent = () => {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4);
  };

  return (
    <div className={style.thumbBlog}>
      <h2 className={style.titleBlog}>Blog</h2>
      <ul className={style.blogList}>
        {posts.slice(0, visiblePosts).map((post) => (
          <li key={post.id}>
            <a className={style.postLink} href={post.link} target="_blank">
              <div className={style.blogBoxImg}>
                <img
                  className={style.blogImg}
                  src={post.img}
                  alt={post.title}
                />
              </div>
              <div className={style.blogContent}>
                <h3 className={style.blogContentTitle}>{post.title}</h3>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {visiblePosts < posts.length && (
        <button
          className={style.loadMoreBtn}
          type="button"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default BlogComponent;
