import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />

    </main>
  )
  
}

export default App;
