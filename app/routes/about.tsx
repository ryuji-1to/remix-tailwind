import { Outlet } from 'react-router';
import type { LoaderFunction, MetaFunction } from 'remix';
import { useLoaderData } from 'remix';

export const loader: LoaderFunction = () => {
  return 'about route';
};

export const meta: MetaFunction = () => {
  return {
    title: 'About Page',
    description: 'This is about page',
  };
};

export default function About() {
  const data: string = useLoaderData();

  return (
    <div>
      <h1 className="text-red-800">This is {data}</h1>
      <Outlet />
    </div>
  );
}
