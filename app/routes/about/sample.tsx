import type { ActionFunction, LoaderFunction, MetaFunction } from 'remix';
import { Form, Link, useLoaderData, useTransition } from 'remix';

import { sleep } from '~/lib';

export const action: ActionFunction = async () => {
  await sleep(1000);

  return null;
};

export const loader: LoaderFunction = async () => {
  return 'This is a sample page';
};

export const meta: MetaFunction = () => {
  return {
    title: 'Sample Page',
    description: 'This is a sample page',
  };
};

export default function SampleRoute() {
  const data = useLoaderData();
  const transition = useTransition();

  return (
    <div>
      <p>{data}</p>
      <Link to="/" className="underline">
        go back to home
      </Link>
      <Form method="post">
        <p>
          <button
            type="submit"
            disabled={!!transition.submission}
            className="p-2 text-lg font-bold text-white bg-purple-500 rounded-lg hover:bg-purple-600"
          >
            {transition.submission ? 'submitting...' : 'submit'}
          </button>
        </p>
      </Form>
    </div>
  );
}
