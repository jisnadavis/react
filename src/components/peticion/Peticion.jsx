import React, { useEffect, useState } from 'react'

export const Peticion = () => {
  const [character, setcharacter] = useState([])
  const [page, setpage] = useState(1)
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(
        'https://rickandmortyapi.com/api/character/?page=' + page
      )
      console.log(character)
      const result = await res.json()
      setcharacter(result.results)
      console.log(character)
      console.log(result)
    }
    fetchdata()
  }, [page]) //! si el array de dependencias está vacío, significa que no depende de nada y por lo tanto únicamente renderiza el código del useEffect la primera vez que se ejecuta el componente

  return (
    <div>
      {character.map((cha) => (
        <div key={cha.id}>
          <img
            src={cha.image}
            alt={cha.name}
            onClick={() => setpage(page + 1)}
          />
          <p>{cha.name}</p>
        </div>
      ))}
    </div>
  )
}
