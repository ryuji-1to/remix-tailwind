import type { ErrorBoundaryComponent, LoaderFunction } from 'remix';
import { useCatch, useLoaderData } from 'remix';

export const loader: LoaderFunction = () => {
  throw new Response('Not Found', { status: 404 });
};

export const meta = () => {
  return {
    title: 'Caught!!!',
    description: 'This is the catch page',
  };
};

export default function CatchRoute() {
  const data = useLoaderData();

  return <div>{data}</div>;
}

export const CatchBoundary = () => {
  const caught = useCatch();
  if (caught.status === 404) {
    return (
      <div className="text-xl font-bold text-blue-500">
        Oops, 404 caught!!! This is CatchBoundary
      </div>
    );
  }
  throw Error('Not Found');
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return <div>{error.message}</div>;
};
