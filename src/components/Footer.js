export default function Footer() {
  return (
    <footer className="w-full fixed bottom-0 left-0 text-center gap-5 p-5 bg-gray-900 text-yellow-200">
      <small>&copy;Apartment App | {new Date().getFullYear()}</small>
    </footer>
  );
}
