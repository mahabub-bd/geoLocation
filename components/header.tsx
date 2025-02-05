import Navbar from "./navbar";

export default function Header() {
  return (
    <div className="bg-teal-500">
      <div className="container mx-auto grid grid-cols-2 py-2">
        <h1>Logo</h1>
        <Navbar />
      </div>
    </div>
  );
}
