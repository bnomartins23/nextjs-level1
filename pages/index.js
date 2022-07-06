import {useState} from 'react'

function Home(){
    return (
            <div>
                <div>teste</div>
                <Contador />
            </div>
        )
}

function Contador(){
    const [contador, setContador] = useState(1)

    function adicionaContador(contador){
        setContador(contador)
    }

    return(
        <div>
            <div>Contador: {contador}</div>
            <div><button onClick={(e)=>adicionaContador(contador+1)}>+</button></div>
        </div>
    )
}

export default Home