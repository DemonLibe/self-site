import { Header } from '../../../widgets/header'
import { Footer } from '../../../widgets/footer'
import { About } from '../../../widgets/about'
import { Skills } from '../../../widgets/skills'
import { Experience } from '../../../widgets/experience'
import { Education } from '../../../widgets/education'
import { Contact } from '../../../widgets/contact'

export function HomePage() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <About />
          <div className="grid-layout">
            <div className="left-column">
              <Experience />
              <Education />
            </div>
            <div className="right-column">
              <Skills />
              <Contact />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
