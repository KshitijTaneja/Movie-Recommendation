import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import './CardTemplate.css' 

type Props = {
  name: number,
  date: string, 
  vote: number,
  image: number, 
  id: number
}

const CardTamplate = ({ name, date, vote, image, id }: Props) => (
  <Link to={`/movie/${id}`}>
    <div className='cardcompi'>
    
      <div className='custom-image'>
        <img alt={name} width='100%' src={`https://image.tmdb.org/t/p/w500${image}`} />
      </div>
      <div className='custom-card'>
        <h3>{name}</h3>
        <p>{`Date: ${date} || Votes: ${vote}`}</p>
      </div>
    
    </div>
  </Link>
)

export default CardTamplate
