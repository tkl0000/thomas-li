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
            <BlogCard slug={slug} title={title} date={date} description={description}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface BlogCardProps {
  slug: string,
  title: string,
  description: string,
  date: string
}

function BlogCard({ slug, title, date, description }: BlogCardProps) {
  return (
      <Link href={`/blog/${slug}`}>
        <div className="">
          {title}
          {description}
          {date}
        </div>
      </Link>
  )
}