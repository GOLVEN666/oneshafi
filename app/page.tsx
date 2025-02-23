import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import Testimonials from "@/components/sections/Testimonials"
import Team from "@/components/sections/Team"
import Contact from "@/components/sections/Contact"
import PageLayout from "@/components/page-layout"

const HomePage = () => {
  return (
    <PageLayout route="/">
      <Hero />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Contact />
    </PageLayout>
  )
}

export default HomePage

