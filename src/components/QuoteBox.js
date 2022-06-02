import React, { useState } from 'react';
import quotes from '../quotes.json'
import '../App.css';

    
const QuoteBox = () => {

    //para escoger un index random
    const randomIndex = Math.floor(Math.random() * quotes.length)

    const [ index, setIndex ] = useState(randomIndex)


    //cree una funcion para cambiar las quotes

    const changeQuotes = () => {
                     //formula para conseguir un numero aleatorio
        const randomIndex = Math.floor(Math.random() * quotes.length)
        
        setIndex(randomIndex)}

    console.log(randomIndex)

    //cree un aregglo de colores

    const colors = ['red','blue','yellow','green','orange']

    //cree una funcion para escoger un color random

    const randomColor= Math.floor(Math.random() * colors.length)

    // ultilizo el document para darle el color al background en el render

    document.body.style =`background: ${colors[randomColor]}`;



    return (
        <div  style={{color: colors[randomColor]}} className='quote'>
        
         <h4 className='quotes-text'><q><i>{quotes[index].quote }</i></q></h4>
            
         <h5 className='quotes-author'>{quotes[index].author }</h5>
        <button onClick={changeQuotes} style={{color: colors[randomColor]}}> <ion-icon name="arrow-back-circle-outline"></ion-icon></button>
           {/* Ingresar iconos, terminar proyecto y ejercicio de logica semanal 1 y 2 */}
   
        </div>
    );
};

export default QuoteBox;