
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      {/* Components rendered in the specified order */}
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;