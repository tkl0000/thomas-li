import Link from 'next/link';
import { getSortedPostsData, PostData } from '../../lib/posts';

export default function Blog() {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ slug, title, date, description }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <h2>{title}</h2>
              <p>{description}</p>
              <small>{date}</small>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}