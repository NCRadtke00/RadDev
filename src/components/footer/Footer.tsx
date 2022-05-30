import React from 'react'
import Notification from './Notification'
import Links from './Links'
import Bottom from './Bottom'
interface FooterProps {
    
}

const Footer: React.FC<FooterProps> = () => {
    return (
        // note to self once sidebar is done re-add this padding other wise it will look weird* sm:pr-24
        <div className="mt-auto bg-[#eed0f9] flex flex-col w-full  mx-auto"> 
            <Notification />
            <Links />
            <Bottom />
        </div>
    )
}

export default Footer
