import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.png";
import About from "../components/About";
import Footer from "../components/footer/Footer.jsx";
export default function HomePage() {
  return (
    <>
      <main className="hero-section">
        <div className="column">
          <h1>Productos de calidad, listos para hornear.</h1>
          <p>
            Ofrecemos una amplia variedad de productos congelados auténticos,
            perfectos para tu negocio, con el sabor y la frescura que esperas.
          </p>
          <Link to="/products">Descubrí nuestros sabores</Link>
        </div>
        <div className="column">
          <img src={heroImage} alt="Imagen de croissants" />
        </div>
      </main>

      <section className="about-section">
        <About />
      </section>

      <Footer />
    </>
  );
}
