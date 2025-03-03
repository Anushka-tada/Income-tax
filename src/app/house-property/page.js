import React from 'react'
import Taxreturn_Nav from '../Tax-Retun/Taxreturn_Nav'
import HouseProperty from './HouseProperty'
import Mainsteps from '../Basic-details2/Mainsteps'
import Support from '../financial-details/Support'

const page = () => {
  return (
    <div>
      <Taxreturn_Nav/>
      <Mainsteps/>
      <HouseProperty/>
      <Support/>
    </div>
  )
}

export default page
