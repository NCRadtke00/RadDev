import {motion} from "framer-motion"
import {pageTransition, pageZoom} from "../../../utilities/animations";
import React from 'react'
import ProductCover from "./ProductCover";
import ProductDetails from "./ProductDetails";
import SuggestedProducts from "./SuggestedProducts";

interface ProductPageProps {
    
}

const ProductPage: React.FC<ProductPageProps> = () => {
    return (
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageZoom}
        transition={pageTransition}
        className="p-12 pt-20"
      >
            <div className="flex">
                <ProductCover />
                <ProductDetails />
            </div>
            <SuggestedProducts />
        </motion.div>
    )
}

export default ProductPage
