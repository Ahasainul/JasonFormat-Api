import React from 'react'


const Proadct = ({products}) => {
  return (
    <>
    <img src={products.thumbnail} alt="" />
  
    <h1>{products.title}</h1>
    <p className='text-blue-700 w-[500px]'>{products.description}</p>

    </>
  )
}

export default Proadct