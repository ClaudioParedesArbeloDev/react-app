//moduls
import { useState } from "react";

//css
import './contador.css'

//component
function Contador() {
    //logica
    
    //hook useState
    const [contador, setContador] = useState(0);

    console.log(contador)

    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        if(contador <= 0){
            setContador(0)
        }else{
            setContador(contador - 1)
        }
    }

    return(
        <div className="contador">
           <button onClick={decrementar}>-</button>
           <p>{contador}</p>
           <button onClick={incrementar}>+</button>
        </div>
    )

}

export default Contador