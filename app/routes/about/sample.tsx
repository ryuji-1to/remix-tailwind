import type { LoaderFunction } from 'remix';
import { Link, useLoaderData } from 'remix';

export const loader: LoaderFunction = () => {
  return 'This is a sample page';
};

export default function SampleRoute() {
  const data = useLoaderData();
  return (
    <div>
      <p>{data}</p>
      <Link to="/" className="underline">
        go back to home
      </Link>
    </div>
  );
}
