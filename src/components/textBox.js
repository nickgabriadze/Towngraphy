import './textBox.css'


export function TextBox({randomCity}){


    return(
        <>
        <div className="textBox">
        <h1 id="pre-defined">{randomCity}</h1>
        <input type='text' value={randomCity[randomCity.length-2].toUpperCase()} id="user-input"></input>
        </div>
        </>
    )
};