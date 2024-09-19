import { Link } from "react-router-dom"

export default function Buy(){
    return(
      
      <div class="container-buy">
        <h1>Compra realizada con exito!</h1>

        <Link class="back-btn" to="/" >
            Volver al inicio
        </Link>
      </div>
       
    )
}