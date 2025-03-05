import React from 'react'
import Taxreturn_Nav from '../Tax-Retun/Taxreturn_Nav'
import Mainsteps from '../Basic-details2/Mainsteps'
import Deduction from './Deduction'

const page = () => {
  return (
    <div>
      <Taxreturn_Nav/>
      <Mainsteps/>
      <Deduction/>
    </div>
  )
}

export default page
