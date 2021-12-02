import type { LoaderFunction } from 'remix';
import { useLoaderData } from 'remix';

export const loader: LoaderFunction = () => {
  return 'hello';
};

export default function Index() {
  const data = useLoaderData();
  return <div className="text-red-200">{data}</div>;
}
