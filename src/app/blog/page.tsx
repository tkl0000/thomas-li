import Link from 'next/link';
import { getSortedPostsData, PostData } from '../../lib/posts';

export default function Blog() {

  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <div className="flex flex-col items-center">
      <ul>
        {allPostsData.map(({ slug, title, date }) => (
          <li key={slug}>
            <BlogCard slug={slug} title={title} date={date}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface BlogCardProps {
  slug: string,
  title: string,
  date: string
}

function BlogCard({ slug, title, date }: BlogCardProps) {
  return (
      <Link href={`/blog/${slug}`}>
        <div className="flex flex-col rounded">
          <div>
            {date} / {title}
          </div>
        </div>
      </Link>
  )
}