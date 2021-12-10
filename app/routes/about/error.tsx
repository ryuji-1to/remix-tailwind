import type {
  ErrorBoundaryComponent,
  LoaderFunction,
  MetaFunction,
} from 'remix';
import { useLoaderData } from 'remix';

export const meta: MetaFunction = () => {
  return {
    title: 'Error page',
    description: 'This is the error page',
  };
};

export const loader: LoaderFunction = () => {
  throw Error('This message is thrown by loader function');
};

export default function ErrorRoute() {
  const data = useLoaderData();

  return <div>{data}</div>;
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-red-500 animate-pulse">
        {error.message}
      </h2>
    </div>
  );
};
