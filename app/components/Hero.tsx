import Image from 'next/image'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone } from 'lucide-react'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <div className="min-h-screen bg-white">

      <main className="container mx-auto px-4 py-12">
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-blue-50 rounded-full transform scale-y-75 skew-y-6 -z-10"></div>
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 relative z-10">FAQ</h1>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto mb-16">
          <AccordionItem value="item-1">
            <AccordionTrigger>Qui somme-nous ?</AccordionTrigger>
            <AccordionContent>
              Une plateforme de streaming dont le but est de rendre accessible le meilleur du cinéma africain.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Quelle est notre mission ?</AccordionTrigger>
            <AccordionContent>
              De permettre aux producteurs de mieux rentabiliser leurs œuvres en les rendant accessibles à tous les amoureux de cinéma africain dans le monde.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Comment nous contacter ?</AccordionTrigger>
            <AccordionContent>
              En cliquant <a href="creator.cinaf.tv">ici</a> et un des fondateurs prendra rendez-vous avec vous pour un échange.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Où se trouve le siège social de l'entreprise CINAF</AccordionTrigger>
            <AccordionContent>
              Le siège social de l'entreprise CINAF est en Belgique à l'adresse Rue des Guillemins 139, 4000 Liège. Et nous possédons une base au Cameroun
            </AccordionContent>
          </AccordionItem>
        </Accordion>

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
      </main>
    </div>
  )
}