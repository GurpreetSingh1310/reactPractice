import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
   <>
   <div className="cardSection">
   <Card name={''} text={''}/>
   <Card name={'Rohit'} text={'Namastey World!'}/>
   </div>
   </>
  )
}

export default CardSection