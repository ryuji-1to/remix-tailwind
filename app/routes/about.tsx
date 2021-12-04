import { Outlet } from 'react-router';
import type { LoaderFunction } from 'remix';
import { useLoaderData } from 'remix';

export const loader: LoaderFunction = () => {
  return 'about route';
};

export default function About() {
  const data = useLoaderData();

  return (
    <div>
      <h1 className="text-red-800">This is {data}</h1>
      <Outlet />
    </div>
  );
}
