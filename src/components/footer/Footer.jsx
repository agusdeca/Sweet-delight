import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import instagram from "../../assets/instagram.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <h2>
        ¡Contáctanos para conocer nuestras promociones y ofertas especiales!
      </h2>
      <ul>
        <a href="">
          <img src={instagram} alt="" />
          <p>@sweet..delight_</p>
        </a>
        <a>
          <img src={phone} alt="" />
          <p>+54 9 1132276818</p>
        </a>
        <a>
          <img src={email} alt="" />
          <p>sweetdelight186@gmail.com</p>
        </a>
      </ul>
    </footer>
  );
}
