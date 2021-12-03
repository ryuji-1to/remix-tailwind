import { Link } from 'remix';

export default function AboutIndex() {
  return (
    <div>
      <p className="text-blue-500">Nested routes is great</p>
      <Link to="./sample" className="underline">
        Sample
      </Link>
    </div>
  );
}
