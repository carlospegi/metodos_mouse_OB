import React, { useEffect, useState } from 'react'

let base = {
    backgroundColor: "black",
    width: "255px",
    height: "255px"

}

const Cuadrado = () => {
    const [state, setState] = useState(base);
    const [click, setClick] = useState(true);


    //==========================================
    const changeColor = () => {

        let red = Math.floor(Math.random() * (250 - 0 + 1) + 0);
        let green = Math.floor(Math.random() * (250 - 0 + 1) + 0);
        let blue = Math.floor(Math.random() * (250 - 0 + 1) + 0);

        if (click) {

            setState({ ...state, backgroundColor: `rgb(${red},${green},${blue})` })
        }

    }
    //==============================================
    const stopColor = () => {
        setState(state)
    }
    const stopAll = () => {
        setClick(false)

    }

    return (
        <div>
            <div onMouseMove={changeColor} onMouseLeave={stopColor} onDoubleClick={stopAll} style={state}></div>
        </div>
    )
}

export default Cuadrado
