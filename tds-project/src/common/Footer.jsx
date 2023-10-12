import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <h3 className="footer-heading">CONTACT</h3>
        <ul>
          <li>
            <a href="mailto:mhawkes@thedesignsanctuary.com">
              mhawkes@thedesignsanctuary.com
            </a>
          </li>
          <li>
            <a href="tel:7602153927">760-215-3927</a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/place/The+Design+Sanctuary/@33.1587623,-117.0911645,15z/data=!4m6!3m5!1s0x80db8cb225d22af9:0xce4c4b5c58169052!8m2!3d33.1591899!4d-117.0657028!16s%2Fg%2F11c58ncqwl?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              1942 Buckskin Glen. Escondido, CA 92027
            </a>
          </li>
        </ul>
        <p>Available between the hours 9:00am-4:00pm PST</p>
        <Link to="/attributions" id="attribution-link">
          Copyright Attributions
        </Link>
      </footer>
    </>
  );
}

export default Footer;
