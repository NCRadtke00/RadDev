import React from 'react'
import {links} from '../../utilities/data'
interface LinksProps {
    
}

const Links: React.FC<LinksProps> = () => {
    return (
        <div className="p-12 grid sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link)=>(
                <div key={link.title} className="mb-4">
                    <h6 className="mb-2 whitespace-nowrap">
                        {link.title}
                    </h6>
                    <ul>
                        {link.list.map((item,index) => (
                           <li>
                            {link.list}
                        </li> 
                        )) }
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Links
