import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return(
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Image src="/cinaf-logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="text-gray-700 hover:text-gray-900">Accueil</Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900">Équipe</Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900">Partenaire</Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900">Notre histoire</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">
            Rejoignez nous
          </button>
          <span className="text-gray-700">FR</span>
        </div>
      </header>
  );
}
