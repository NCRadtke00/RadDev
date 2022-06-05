import {motion} from "framer-motion"
import {pageTransition, pageZoom} from "../../utilities/animations";
import React from 'react'

interface ProductPageProps {
    
}

const ProductPage: React.FC<ProductPageProps> = (props: Props) => {
    return (
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageZoom}
        transition={pageTransition}
        className="p-12 pt-20"
      >
            
        </motion.div>
    )
}

export default ProductPage
