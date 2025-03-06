import React from 'react'
import Taxreturn_Nav from '../Tax-Retun/Taxreturn_Nav'
import Mainsteps from '../Basic-details2/Mainsteps'
import ExtraDetails from './ExtraDetails'
import Support from '../financial-details/Support'

const page = () => {
  return (
    <div>
      <Taxreturn_Nav/>
      <Mainsteps/>
      <ExtraDetails/>
      <Support/>
    </div>
  )
}

export default page
