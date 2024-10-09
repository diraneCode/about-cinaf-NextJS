import Image from 'next/image'
import Link from 'next/link'
import Social from './Social'


export default function Footer() {
  return (
    <div className="bg-white">
      
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Image src="/cinaf-logo.png" alt="CINAF Logo" width={70} height={70} className="mb-4" />
              <p className="text-gray-600 mb-2">CINAF est une plateforme de streaming</p>
              <p className="text-gray-600 mb-2">Dédiée 100% au film africain</p>
              <p className="text-gray-600">Disponible sur playstore et Apple store</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-orange-500">CINAF VOD</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-orange-500">CREATOR</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-orange-500">STORE</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-orange-500">EQUIPES</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-orange-500">FAQ</Link></li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-600 mb-4">Entrez votre adresse E-mail pour recevoir nos actualités</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Entrez votre email"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-r-full hover:bg-orange-600 transition duration-300"
                >
                  →
                </button>
              </form>
              <p className="text-gray-600 mt-2">Votre e-mail est en sécurité avec nous.</p>
            </div>
          </div>
          <Social />
        </div>
      </footer>
    </div>
  )
}