import React from 'react'
import Notification from './Notification'
import Links from './Links'
import Bottom from './Bottom'
interface FooterProps {
    
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="mt-auto bg-[#eed0f9] flex flex-col w-full sm:pr-24 mx-auto"> 
            <Notification />
            <Links />
            <Bottom />
        </div>
    )
}

export default Footer
