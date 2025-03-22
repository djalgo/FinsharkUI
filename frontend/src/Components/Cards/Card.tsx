import React from 'react'

interface Props {
  companyName: string;
  ticker: string;
  price: number
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className='Card'>
        <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNuvdA60X9tQmlPWSA2qd2ZojccIVAes_HA&s' alt='image'></img>

        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
            <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla autem facilis voluptatem consequatur possimus. Sint natus animi eveniet soluta dolores quod aliquam eaque! Praesentium repellat dicta hic odio quasi.</p>
        </div>
    </div>
  )
}

export default Card