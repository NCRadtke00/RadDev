import React from 'react'
import DropDown from '../dropdown/DropDown';
import {currency, languages} from "../../utilities/data";
interface FooterBottomProps {
    
}

const FooterBottom: React.FC<FooterBottomProps> = () => {
    return (
        <div className="py-5 px-12 flex items-center bg-[#eaeaea] border-t border-[rgba(7, 7, 13, 0.05)]">
            <span className="text-sm whitespace-nowrap opacity-70 ml-4">
                 May 2022 |\|{" "}
               <a href="https://github.com/NCRadtke00" className="text-[#2a008c] transition-all
                    duration-100 border-b border-r border-full border-[#2a008c] hover:text-[#f07] 
                    hover:border-[#f07] hover:border-t hover:border-l hover:border-dotted ">
                         {/* 3QTees  */}
                </a>
            </span>
            <span className="ml-auto flex items-center">
               <DropDown
               className="footer__dropdown"
               items={languages}
               defaultItem={languages[0]}
               />
                <a className="transition-colors duration-200 py-2 pr-8 pl-4
                    whitespace-nowrap first-of-type:pt-3 last-of-type:pb-3 hover:bg-gray-100">
                Language
                </a>
            </span>
        </div>
    )
}

export default FooterBottom
