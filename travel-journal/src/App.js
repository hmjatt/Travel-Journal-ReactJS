import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";
import "./App.css";

function App() {
    const cards = data.map((item) => {
        return <Card key={item.id} {...item} />;
    });

    return (
        <div className="App">
            <Navbar />
            <section className="cards-list">{cards}</section>
            <Footer />
        </div>
    );
}

export default App;
