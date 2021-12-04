import type { LoaderFunction, MetaFunction } from 'remix';
import { Link, useLoaderData } from 'remix';

export const loader: LoaderFunction = async () => {
  return 'This is a Remix template';
};

export const meta: MetaFunction = () => {
  return {
    title: 'Remix Template',
    description: 'This is a Remix template',
  };
};

export default function Index() {
  const data = useLoaderData();

  return (
    <div>
      <p className="text-blue-500">{data}</p>
      <Link to="/about" className="underline">
        go to about page
      </Link>
    </div>
  );
}
