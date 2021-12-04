import type { LoaderFunction } from 'remix';
import { Link, useLoaderData } from 'remix';

export const loader: LoaderFunction = async () => {
  return 'Nested routes is great!!!!!!!!!';
};

export default function AboutIndex() {
  const data = useLoaderData();

  return (
    <div>
      <p className="text-blue-500">{data}</p>
      <Link to="./sample" className="underline">
        Sample
      </Link>
      <div></div>
    </div>
  );
}
