import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="font-bold text-2xl text-rose-500">
          <Link href="/">Airbnb</Link>
        </h3>
        <nav>
          <ul className="flex space-x-6">
            <li className={`hover:text-rose-500 transition-colors ${router.pathname === '/home' ? 'font-bold text-rose-500' : 'text-gray-600'}`}>
              <Link href="/home">Home</Link>
            </li>
            <li className={`hover:text-rose-500 transition-colors ${router.pathname === '/about' ? 'font-bold text-rose-500' : 'text-gray-600'}`}>
              <Link href="/about">About</Link>
            </li>
            <li className={`hover:text-rose-500 transition-colors ${router.pathname === '/listings' ? 'font-bold text-rose-500' : 'text-gray-600'}`}>
              <Link href="/listings">Listings</Link>
            </li>
            <li className={`hover:text-rose-500 transition-colors ${router.pathname === '/host' ? 'font-bold text-rose-500' : 'text-gray-600'}`}>
              <Link href="/host">Become a Host</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;