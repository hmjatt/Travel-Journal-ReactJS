import globeLogo from "../images/globe.png";

function Navbar() {
    return (
        <nav>
            <img src={globeLogo} className="nav-logo" alt="globe-logo" />
            <h1>Travel Journal</h1>
        </nav>
    );
}

export default Navbar;
