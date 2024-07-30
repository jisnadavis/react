import { Header } from '../header/Header'
import { Peticion } from '../peticion/Peticion'
import './desplagable.css'
import React, { useState, useEffect } from 'react'

export const Desplegable = () => {
  const [opened, setopened] = useState('false')

  //!si el array de dependencias está vacío, significa que no depende de nada y por lo tanto únicamente renderiza el código del useEffect la primera vez que se ejecuta el componente
  const toogle = () => {
    setopened(!opened)
  }
  return (
    <div>
      <img
        src='./assets/dropdown.webp'
        className='desplagable'
        onClick={toogle}
      />

      <div className='menu'>
        <Header
          H='90svh'
          flexdir='column'
          bgcolor='violet'
          w={opened ? '300px' : '0px'}
          r={0}
        />
      </div>
    </div>
  )
}
