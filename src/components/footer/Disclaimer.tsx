import React from 'react'
// import { notifications } from "../../utilities/data"
interface DisclaimerProps {
    
}

const Disclaimer: React.FC<DisclaimerProps> = () => {
    return (
        
       <div className="text-base bg-[#1a1a1a] text-white py-4 px-12 text-center">
            {/* {notifications.map((item,index)=>(  */}
           <strong> Sale of the month: </strong>
           This months all member use code <strong> GiveIt2MeBaby </strong> for free shipping!
        {/* ))} */}
        </div>
    )
}

export default Disclaimer
