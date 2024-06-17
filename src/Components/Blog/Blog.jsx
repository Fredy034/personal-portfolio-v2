import './Blog.css'
import { usePageContext } from '../PageContext';

const Blog = () => {
  const { activePage } = usePageContext();

  return (
    <article className={`blog ${activePage === 'blog' ? 'active' : ''}`}>
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <section className="blog-posts">
        <ul className="blog-posts-list">
          <li className="blog-post-item">
            <a href="#">
              <figure className="blog-banner-box">
                <img src="/images/blog-1.jpg" alt="Design Conferences 2022" loading='lazy' />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Design</p>
                  <span className="dot"></span>
                  <span className="blog-date">March 21, 2022</span>
                </div>
                <h3 className="h3 blog-item-title">Design conferences in 2022</h3>
                <p className="blog-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima consequuntur alias. Quia nostrum tempora ullam quo modi in. Quo ipsum modi fugiat. At ratione fugit maxime amet iste officia.</p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default Blog;