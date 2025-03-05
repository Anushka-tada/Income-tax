import React from 'react'
import Taxreturn_Nav from '../Tax-Retun/Taxreturn_Nav'
import Mainsteps from '../Basic-details2/Mainsteps'
import Prepaid from './Prepaid'
import Support from '../financial-details/Support'

const page = () => {
  return (
    <>
     <Taxreturn_Nav/>
     <Mainsteps/>
     <Prepaid/>
     <Support/>
    </>
  )
}

export default page
