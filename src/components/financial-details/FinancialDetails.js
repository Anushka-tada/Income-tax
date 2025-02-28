import Need_Support from "../homepage/Need_Support"
import Nav from "../Navbar/Nav"
import Taxreturn_Nav from "../Tax-Retun/Taxreturn_Nav"
import Financial from "./Financial"
import Support from "./Support"


const FinancialDetails = () => {
  return (
    <div>
      <Taxreturn_Nav/>
      <Financial/>
      <Support/>
    </div>
  )
}

export default FinancialDetails
