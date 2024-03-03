import React from 'react'
import Card from '../components/Card'

const fruits = [
  {
    id:1,
    price: 10.00,
    name: "Banana",
    description: "fresh banana from YeU"
  },
  {
    id:2,
    price: 12.00,
    name: "Guava",
    description: "fresh banana from YeU"
  },
  {
    id:3,
    price: 13.00,
    name: "Orange",
    description: "fresh Orange from YeU"
  },
  {
    id:4,
    price: 15.00,
    name: "Apple",
    description: "fresh guava from YeU"
  },
  {
    id:5,
    price: 13.00,
    name: "Grape",
    description: "fresh grape from YeU"
  },
]
const Body = () => {
  return (
    <section className='body'>
    { fruits.map((fruit)=>(
      <Card key={fruit.id} fruit={fruit}/>
    ))}
    </section>
  )
}

export default Body