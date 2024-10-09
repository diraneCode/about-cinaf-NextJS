import Footer from './components/Footer'
import FAQ from './components/FAQ'
import Navbar from './components/Navbar'
import SectionApp from './components/SectionApp'
import SectionContact from './components/SectionContact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-blue-50 rounded-full transform scale-y-75 skew-y-6 -z-10"></div>
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 relative z-10">FAQ</h1>
        </div>
        <FAQ />
        <SectionContact />
      </main>
      <SectionApp />
      <Footer />
    </div>
  )
}