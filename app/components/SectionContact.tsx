import { Phone } from 'lucide-react'

export default function SectionContact(){
    return(
        <div className="relative">
          <div className="absolute inset-0 bg-gray-100 opacity-50 z-0">
            <div className="w-full h-full bg-repeat" style={{ backgroundImage: "url('/world-map-dots.png')" }}></div>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center p-8">
            <div className="mb-8 md:mb-0 md:mr-8 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-orange-500">Appelez-nous</span> pour plus d'informations. Notre équipe CINAF est là pour vous <span className="text-orange-500">à tout moment.</span>
              </h2>
              <p className="text-gray-600">Nous sommes disponibles 24h/24 !</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500 mb-2">APPELEZ-NOUS MAINTENANT</p>
              <div className="flex items-center justify-center md:justify-end mb-4">
                <Phone className="w-6 h-6 text-orange-500 mr-2" />
                <span className="text-2xl md:text-3xl font-bold">+32 467 87 04 92</span>
              </div>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
    )
}