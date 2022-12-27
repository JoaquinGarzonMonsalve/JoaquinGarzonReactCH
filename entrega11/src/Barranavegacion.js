import React from 'react';
import CartWidget from './CartWidget';

function Barranavegacion(){

  return(
    <div className='contenedor'>
      <div className='contenedor-logo'>

        <CartWidget/>

      </div>

      <div className='contenedor-nav'>

       
          <li><a> inicio</a></li>
          <li><a> ventas</a></li>
          <li><a>nosotros</a></li>

          <div className='contenedor-carrito'>

            <img className='carrito'
            src={require('./carrito.png')}
            />

            <p className='cantidad'>4</p>

          </div>


          

          
        
        

      </div>

      

    </div>
  )
}


export default Barranavegacion;