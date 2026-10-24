import { Header } from '../../../widgets/header'
import { Hero } from '../../../widgets/hero'
import { Footer } from '../../../widgets/footer'
import { About } from '../../../widgets/about'
import { Skills } from '../../../widgets/skills'
import { Experience } from '../../../widgets/experience'
import { Education } from '../../../widgets/education'
import { Contact } from '../../../widgets/contact'
import { useSpotlight } from '../../../shared/lib'

export function HomePage() {
  useSpotlight()

  return (
    <div className="app">
      <a href="#main" className="skip-link">
        Перейти к содержимому
      </a>
      <Header />
      <main className="main-content" id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
