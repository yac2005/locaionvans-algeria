// app/page.tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Services from '@/components/Services'
import Fleet from '@/components/Fleet'
import Coverage from '@/components/Coverage'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Fleet />
      <Coverage />
      <Testimonials />
      <About />
      <Contact />
      <Footer />

    </main>
  )
}