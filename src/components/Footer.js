export default function Footer() {
  return (
    <header className="sticky bottom-0 mt-24 text-center gap-5 p-5 bg-gray-900 text-gray-50">
      <small>&copy;Apartment App | {new Date().getFullYear()}</small>
    </header>
  );
}
