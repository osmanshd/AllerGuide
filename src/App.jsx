import { useState } from "react"
import Bar from "./Bar"
import Intro from "./Intro"
import Features from "./Features"
import Footer from "./Footer"

function App() {
  return (
    < >
      <header>
        <Bar />
        <Intro />
      </header>
      <main>
        <Features />
      </main>
      <Footer />
    </ >
  )
}

export default App