import React from 'react'
import "./bookeca.css"

const BookeCA = () => {
  return (
    <>
      {/* top CA Consultants section start*/}
         <div className="ca-consultants py-20 lg:px-20 md:px-10 px-4 flex flex-wrap xl:justify-between lf:justify-between md:justify-between  justify-center items-center">
           <div className="ca-text flex flex-col mb-6 ">
           <h1 className='text-4xl'>Top Online CA Consultants for <span className='font-bold py-2 blue-text'>ITR Filing Services in India</span> </h1>
             <div className='inline-flex gap-1 rounded-full shadow py-1 px-5 my-6'>
                <p>4.9</p>
                <img src="https://tax2win.in/assets-new/img/ca-assisted/google-rating.png" alt="" />
                <p>10468 ratings</p>
             </div>

             <ul>
                <li className='flex gap-3 items-center mb-2 font-semibold'><img src="https://tax2win.in/assets-new/img/landing/common/tick-icon2.png" alt="" />
                <p>Lowest Tax Filing Fees in India</p>
                </li>
                <li className='flex gap-3 items-center mb-2  font-semibold'><img src="https://tax2win.in/assets-new/img/landing/common/tick-icon2.png" alt="" />
                <p>Reliable and Secure ITR Filing Platform</p>
                </li>
                <li className='flex gap-3 items-center  font-semibold'><img src="https://tax2win.in/assets-new/img/landing/common/tick-icon2.png" alt="" />
                <p>Tax Filing for all - Freelancers, NRI, Business Owners, Salaried Persons</p>
                </li>
             </ul>
           </div>
           <div className="ca-form lg:p-9 md:p-9 p-4 xl:p-9 lg:me-28 shadow-lg rounded-lg flex flex-col items-center">
              <img src="https://tax2win.in/assets-new/img/ca-assisted/offerbookca.png" alt="" className='banner'/>
              <h1 className='text-2xl font-bold'>Register</h1>
             <div>
             <input type="text" placeholder='Full Name' className='py-2 px-5 mb-3 mt-8 rounded-md'  />
              <input type="text" placeholder='Email Address' className='py-2 px-5 mb-3 rounded-md' />
              <input type="text" placeholder='Mobile Number' className='py-2  px-5 mb-6 rounded-md' />
             </div>
              <p className='font-sm'>By submitting the form, you agree to our
                <span className='text-blue-500'> Terms & Conditions </span> and <span className='text-blue-500'> Privacy Policy</span></p>
                <div className="book-btn rounded-lg mt-6 flex gap-3 justify-center w-full py-3">
                <p className='text-white text-xl'>Book eCA Now</p>
                <img src="https://tax2win.in/assets-new/img/new-theme/diy-flow/nex-arrow.svg" alt="" />
                </div>
                <div className="google-btn rounded-lg flex gap-3 justify-center w-full py-3 mt-4">
                    <img src="https://tax2win.in/assets-new/img/google-icon.svg" alt="" height={25} width={25} />
                    <p  className=' font-semibold text-xl '>Sign in with Google</p>
                </div>
           </div>

            

         </div>


{/* ratings section start  */}

         <div className="ratings flex flex-wrap justify-center gap-5 py-14">
            <div className="rating mx-5 flex flex-col justify-center items-center gap-1">
                <img src="https://tax2win.in/assets-new/img/tax-advisory/rating.svg" alt="" />
                <p className='text-xl font-bold mt-2'>4.9</p>
                <p className='text-lg'>Google Rating</p>
            </div>

            <div className="rating mx-5 flex flex-col justify-center items-center gap-1">
                <img src="https://tax2win.in/assets-new/img/tax-advisory/satisfaction.svg" alt="" />
                <p className='text-xl font-bold mt-2'>1+ Million</p>
                <p  className='text-lg'>Satisfied Customers</p>
            </div>

            <div className="rating mx-5 flex flex-col justify-center items-center gap-1">
                <img src="https://tax2win.in/assets-new/img/tax-advisory/already-saved.svg" alt="" />
                <p className='text-xl font-bold mt-2'>2500 Cr.</p>
                <p  className='text-lg'>Saved Already!</p>
            </div>

            <div className="rating mx-5 flex flex-col justify-center items-center gap-1">
                <img src="https://tax2win.in/assets-new/img/tax-advisory/satisfaction.svg" alt="" />
                <p className='text-xl font-bold mt-2'>10+ Years</p>
                <p  className='text-lg'>of Industry Experience</p>
            </div>

         </div>

         {/* tax return filling section start */}

         <div className="tax-return-filling flex flex-col justify-center items-center text-cent py-14">
         <h1 className='text-4xl font-bold py-4' >Tax2win Online CA for Income Tax Return (ITR) Filing</h1>
         <p>Streamline your tax process with our online CA consultation services for smooth income tax return filing</p>

         <div className="process flex gap-5 mt-7">
            <div className=" flex justify-center gap-5">
                <div className='flex flex-col gap-3 bg-white step1 rounded-2xl p-5 '>
                    <img src="https://tax2win.in/assets-new/img/ca-assisted/accurate-tax-compliant.svg" alt="" height={50} width={50} />
                    <h3 className='text-xl font-semibold '>Accurate
                    & Tax Compliant</h3>
                    <p className='text-lg'>Our platform offers automatic data import from your Form 16/Form 26AS and provides guided assistance throughout the tax return filing process.</p>
                </div>
                <div className='flex flex-col gap-3 bg-white step1 rounded-2xl p-5 '>
                    <img src="https://tax2win.in/assets-new/img/ca-assisted/online-process.svg" alt="" height={50} width={50} />
                    <h3 className='text-xl font-semibold '>Fully
                    online process</h3>
                    <p className='text-lg'>A fully assisted online CA services means no need to visit the Tax Consultant office. You can also Track your e-filing through Tax2Win.</p>
                </div>
                <div className='flex flex-col gap-3 bg-white step1 rounded-2xl p-5'>
                    <img src="https://tax2win.in/assets-new/img/ca-assisted/save-taxes.svg" alt="" height={50} width={50} />
                    <h3 className='text-xl font-semibold '>Accurate
                    & Tax Compliant</h3>
                    <p className='text-lg'>Our online CA consultants can assist you with tax-saving investments based on your tax record, and you'll also gain access to
                         financial guides and tools that help you manage your finances more efficiently.</p>
                </div>
            </div>
         </div>
         </div>
        

    </>
  )
}

export default BookeCA
