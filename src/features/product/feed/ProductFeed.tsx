import { observer } from 'mobx-react-lite'
import React from 'react'

interface ProductFeedProps {
    
}

const ProductFeed:React.FC<ProductFeedProps> = () => {
    return (
        <div   className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 m-8">
            product
        </div>
    )
}

export default observer(ProductFeed)
