import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
			<section className="cards-list"><Card /></section>
			<Footer />
        </div>
    );
}

export default App;
