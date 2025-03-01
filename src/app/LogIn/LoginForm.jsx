import "./loginForm.css"

const LoginForm = () => {
  return (
    <div className="login-Form flex flex-col items-center text-center py-20 px-4 ">
      <h1 className="text-3xl login-heading font-semibold lg:w-1/3 md:w-1/3">Login to Tax2win Income Tax
      Return filing Account
      </h1>
      <p className="text-lg mb-12 mt-3">File your ITR online in just 4 minutes</p>
      <div className="login-social-btns flex gap-4 mb-4">
        <div className="login-google flex gap-2 bg-white py-3 px-10 shadow-md rounded-lg">
        <img src="https://tax2win.in/assets-new/img/signup/btn_google_light_normal.svg" width="20px" height="20px" alt=""/>
        <p className="text-lg">Google</p>
        </div>
        <div className="login-facebook flex gap-2 bg-white py-3 px-10 shadow-md rounded-lg">
        <img src="https://tax2win.in/assets-new/img/signup/facebook_login.svg" width="20px" height="20px"  alt=""/>
        <p className="text-lg">Facebook</p>
        </div>
        
      </div>
      {/* <div className="">
            <span>or</span>
            <hr className="w-28 "/>
        </div> */}
         <p className="mb-3">or</p>
         <input type="text" placeholder="Email or Mobile Number" className="py-3 px-7 w-full rounded-lg bg-transparent text-lg mb-3 lg:w-96 md:w-96"  />
         <input type="password" placeholder="Password" className="py-3 px-7 w-full rounded-lg bg-transparent text-lg md:w-96 lg:w-96" />
        <div className="flex justify-end md:w-96 lg:w-96 mt-2 forget-p"> <p >Forgot Password ?</p></div>

        <div className="login-btn py-3 px-9 text-lg text-white rounded-lg font-medium mt-5 mb-3 md:w-96 lg:w-96 w-full mx-2">
            Log In
        </div>
        <p className="font-bold">Don’t have an account? <span className="sign-green">Sign Up</span></p>
         

         <div>
            <ul className="flex flex-wrap justify-center lg:flex-nowrap gap-7 py-12">
                <li className="flex gap-3">
                <img src="https://tax2win.in/assets-new/img/signup/accurate.svg" alt="99.99% Accurate Return Filing"/>
                <p className="return-filling" >99.99% Accurate Return Filing </p>
                </li>
                <li className="flex gap-3">
                <img src="https://tax2win.in/assets-new/img/signup/refund.svg" alt="Guaranteed Maximum Refunds"/>
                <p className="refunds">Guaranteed Maximum Refunds </p>
                </li>
            </ul>
         </div>

    </div> 
  )
}

export default LoginForm
