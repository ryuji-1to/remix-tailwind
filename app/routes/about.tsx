import { Outlet } from 'react-router';

export default function About() {
  return (
    <div>
      <h1 className="text-red-800">This is about page</h1>
      <Outlet />
    </div>
  );
}
