export default function Header() {
  return (
    <header className="flex justify-between items-center p-5 mb-10 bg-gray-900 text-gray-50">
      <section>
        <div>
          <h3 className="text-3xl text-yellow-100">Apartment Locator</h3>
          <p className="uppercase">Find your appartment today!</p>
        </div>
      </section>
      <ul className="flex justify-center items-center gap-2 text-xl uppercase">
        <li>All Listings</li>
        <li>Log In</li>
        <li>Sign Up</li>
      </ul>
    </header>
  );
}
