import React, { useEffect, useState } from 'react'
import { Loader } from './Loader'

export const Works = ({ rows = 10 }) => {
  const [items, setItems] = useState(undefined)

  useEffect(() => {
    fetch(`/api/works?rows=${rows}`)
      .then(response => response.json())
      .then(items => setItems(items))
  }, [rows])

  if (!items) {
    return <Loader />
  }

  return (
    <ol>
      {items.map(item => (
        <li key={item.DOI}>{item.title}</li>
      ))}
    </ol>
  )
}
