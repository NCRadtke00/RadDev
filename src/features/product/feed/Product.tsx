import { motion } from "framer-motion";
import { pageTransition, pageZoom } from "../../../utilities/animations";
import { Product as ProductType } from '../../../types/product'
import { observer } from "mobx-react-lite";
import ProductInfo from "./ProductInfo";
import ProductPicture from "./ProductPicture";


interface ProductProps {
    product: ProductType;
}

const Product: React.FC<ProductProps> = () => {

    return (
        <motion.div 
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
            variants={pageZoom}
            layout
            className="w-3/4 bg-white rounded0lg shadow-md flex flex-col transition-all duration-200 transform hover:scale-110 hover:drop-shadow-lg"
        >
            <ProductPicture />
            <ProductInfo />
        </motion.div>
    )
}

export default observer(Product);
