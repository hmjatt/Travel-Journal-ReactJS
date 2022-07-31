import globeLogo from "../images/globe.png";

function Navbar() {
    return (
        <nav>
            <img src={globeLogo} className="nav-logo" alt="globe-logo" />
        </nav>
    );
}

export default Navbar;