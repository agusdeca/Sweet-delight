import CardFlip from "./cardFlip/CardFlip";
import { benefits } from "../utils/benefits";
import logo from "../assets/logo.jpeg";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-desc-container">
        <div className="about-col-1">
          <h1 className="about-title">Sobre nosotros</h1>
          <p className="about-desc">
            Somos una panadería de calidad, dedicada a producir los más
            deliciosos y auténticos productos panaderos. Hoy, llevamos esa
            pasión a tu negocio, ofreciéndote una amplia variedad de productos
            congelados de alta calidad, listos para hornear y servir.
          </p>
        </div>

        <div className="about-col-2">
          <img src={logo} alt="" />
        </div>
      </div>

      <h1>¿Por qué elegirnos?</h1>
      <div className="benefits-cards-container">
        {benefits.map((benefit) => {
          return (
            <CardFlip
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
            />
          );
        })}
      </div>
    </div>
  );
}
