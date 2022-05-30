import React from 'react'
import {links} from '../../utilities/data'
interface LinksProps {
    
}

const Links: React.FC<LinksProps> = () => {
    return (
        <div className="p-12 grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {links.map((link)=>(
                <div key={link.title} className="mb-4 text-center">
                    <h5 className="mb-2 whitespace-nowrap cursor-pointer">
                        {link.title}
                    </h5>
                    <ul>
                        {link.list.map((item,index) => (
                           <li key={index} className=" mb-2 text-sm text-center opacity-70 text-[#1a1a1a]
                                transition-all duration-100 whitespace-nowrap hover:opacity-100 cursor-pointer">
                            {item}
                            </li> 
                        )) }
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Links
