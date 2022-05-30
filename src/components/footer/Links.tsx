import React from 'react'
import {links} from '../../utilities/data'
interface LinksProps {
    
}

const Links: React.FC<LinksProps> = () => {
    return (
        <div className="p-12 grid sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link)=>(
                <div>
                    <h6>
                        {link.title}
                    </h6>
                    <ul>
                        { <li>
                            {link.list}
                        </li>}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Links
