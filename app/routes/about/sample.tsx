import { Link } from 'remix';

export default function SampleRoute() {
  return (
    <div>
      <p>sample route</p>
      <Link to="/" className="underline">
        go back to home
      </Link>
    </div>
  );
}
