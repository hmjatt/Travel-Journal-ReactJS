import fuji from "../images/mt-fuji.jpg";
import pinPic from "../images/pin.svg";

function Card() {
    return (
        <div className="card">
            <div className="card-image-div">
                <img src={fuji} className="card-image" alt="title" />
            </div>
            <div className="card-text-div">
                <div className="card-location">
                    <img src={pinPic} className="card-pin" alt="pin-icon" />
                    <span className="location">Japan</span>
                    <span className="grey">
                        <a
                            href="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View on Google Maps Link
                        </a>
                    </span>
                </div>
                <h2 className="card-title">Mount Fuji</h2>
                <div className="card-date">
                    <span className="start-date">12 Jan, 2021</span>
                    <span className="dash">-</span>
                    <span className="end-date">24 Jan, 2021</span>
                </div>
                <p className="card-description">
                    <span>
                        Mount Fuji is the tallest mountain in Japan, standing at
                        3,776 meters (12,380 feet). Mount Fuji is the single
                        most popular tourist site in Japan, for both Japanese
                        and foreign tourists.
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Card;
