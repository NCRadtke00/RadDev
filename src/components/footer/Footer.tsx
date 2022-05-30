import React from 'react'
import Disclaimer from './Disclaimer'
import Links from './Links'
import FooterBottom from './FooterBottom'
interface FooterProps {
    
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="mt-auto bg-[#d8d8d8] flex flex-col w-full sm:pl-24 mx-auto">
            {/* <Disclaimer />
            <Links />
            <FooterBottom /> */}
            footer stuff hereeeeeeeeeeeee
        </div>
    )
}

export default Footer
