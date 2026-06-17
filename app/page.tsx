// app/page.tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import BookingBar from '@/components/BookingBar'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Fleet from '@/components/Fleet'
import Coverage from '@/components/Coverage'
import WaysToBook from '@/components/WaysToBook'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <BookingBar />
      <Services />
      <Testimonials />
      <Fleet />
      <Coverage />
      <WaysToBook />
      <Footer />
    </main>
  )
}
