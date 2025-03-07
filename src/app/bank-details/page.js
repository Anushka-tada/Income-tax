import React from 'react'
import Taxreturn_Nav from '../tax-return/Taxreturn_Nav'
import Mainsteps from '../basic-details2/Mainsteps'
import Support from '../financial-details/Support'
import BankDetails from './BankDetails'

const page = () => {
  return (
    <div>
      <Taxreturn_Nav/>
      <Mainsteps/>
      <BankDetails/>
      <Support/>
    </div>
  )
}

export default page
