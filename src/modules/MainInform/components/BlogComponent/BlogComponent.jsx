import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import posts from 'shared/data/posts';
import style from './BlogComponent.module.scss';

const BlogComponent = () => {
  const [visiblePosts, setVisiblePosts] = useState(4);
  const blogListRef = useRef(null);
  const previousVisiblePosts = useRef(visiblePosts);

  const handleLoadMore = () => {
    previousVisiblePosts.current = visiblePosts;
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4);
  };

  useEffect(() => {
    const items = blogListRef.current.children;

    gsap.fromTo(
      items,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      }
    );
  }, []);

  useEffect(() => {
    if (previousVisiblePosts.current === visiblePosts) return;

    const items = blogListRef.current.children;
    const newItems = Array.from(items).slice(previousVisiblePosts.current);

    gsap.fromTo(
      newItems,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      }
    );
  }, [visiblePosts]);

  return (
    <div className={style.thumbBlog}>
      <h2 className={style.titleBlog}>Blog</h2>
      <ul ref={blogListRef} className={style.blogList}>
        {posts.slice(0, visiblePosts).map((post) => (
          <li key={post.id}>
            <a
              className={style.postLink}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
            >
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
