import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTwitch, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <>
            <div className="footer-container">
                {/*<hr/>*/}
                <div className="footer-contents">
                    <a href="https://twitter.com/AmericanRiichi">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a href="https://www.twitch.tv/americanriichi">
                        <FontAwesomeIcon icon={faTwitch}/>
                    </a>
                    <a href="https://www.youtube.com/@AmericanRiichi">
                        <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;