import React from 'react'
import CardInfo_02 from './CardInfo_02'

const CardInfo = () => {
    const userData={
    "Name":"Madhari Tarunsai",
    "Age":23,
    "City":"Hyderabad"
  }
  return (
    <div>
      <CardInfo_02 userDetails={userData}/>
    </div>
  )
}

export default CardInfo
