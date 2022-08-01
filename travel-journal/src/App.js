import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
			<section className="cards-list"><Card /></section>
			
        </div>
    );
}

export default App;
