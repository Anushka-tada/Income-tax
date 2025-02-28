import "./financial.css"

const Support = () => {
  return (
    <div className="needSupport flex flex-wrap-reverse items-center justify-center  py-11 lg:px-24 px-4 ">
         <div className="supports flex flex-wrap justify-center gap-6">
            
            <div className="contact flex gap-3 items-center">
            <img src="https://tax2win.in/assets-new/img/new-theme/call.svg" alt="Call Now" width="32" height="32"/>
            <h2 className=" text-white text-2xl">+91 91166 84439</h2>
            </div>
            <div className="mail flex gap-3 items-center">
            <img src="https://tax2win.in/assets-new/img/new-theme/mail.svg" alt="Call Now" width="32" height="32"/>
           <h2 className=" text-white text-2xl"> support@tax2win.in</h2>
            </div>
</div>


    </div>
  )
}

export default Support
