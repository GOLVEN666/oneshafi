import PageLayout from "@/components/page-layout"
import About from "@/components/sections/About"
import Team from "@/components/sections/Team"

const AboutPage = () => {
  return (
    <PageLayout route="/a-propos">
      <About />
      <Team />
    </PageLayout>
  )
}

export default AboutPage

