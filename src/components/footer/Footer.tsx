import React from 'react'
import Disclaimer from './Disclaimer'
import Links from './Links'
import FooterBottom from './FooterBottom'
interface FooterProps {
    
}

const Footer: React.FC<FooterProps> = () => {
    return (
        // note to self once sidebar is done re-add this padding other wise it will look weird* sm:pr-24
        <div className="mt-auto bg-[#d8d8d8] flex flex-col w-full  mx-auto"> 
            <Disclaimer />
            <Links />
            <FooterBottom />
        </div>
    )
}

export default Footer
