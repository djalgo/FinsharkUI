import React from 'react'
import Card from '../Cards/Card'

interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
        <Card companyName='Apple' ticker='AAPL' price={110} />
        <Card companyName='Microsoft' ticker='MSFT' price={130} />
        <Card companyName='Tesla' ticker='TSLA' price={110} />
        <Card companyName='Netflix' ticker='NFLX' price={110}/>
    </div>
  )
}

export default CardList