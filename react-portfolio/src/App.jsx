import React from 'react'

import { About, Contact, Experience, Footer, Header, Nav, Portfolio} from './components/'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App