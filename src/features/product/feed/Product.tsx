import { motion } from "framer-motion";
import { pageTransition, pageZoom } from "../../../utilities/animations";
import { Product as ProductType } from '../../../types/product'
import { observer } from "mobx-react-lite";
import ProductInfo from "./ProductInfo";
import ProductPicture from "./ProductPicture";
import { useStore } from "../../../stores/store";
import { useRouter } from "next/router";


interface ProductProps {
    product: ProductType;
}

const Product: React.FC<ProductProps> = (product) => {
    const router = useRouter();
    const { loadProduct, selectedProduct, removeSelectedProduct} = useStore().productStore;
    return (
        <motion.div 
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
            variants={pageZoom}
            layout
            onClick={ () => {router.push(`/product/${product.id}`)}}
            className="w-3/4 bg-white rounded0lg shadow-md flex flex-col transition-all duration-200 transform hover:scale-110 hover:drop-shadow-lg"
        >
            <ProductPicture product={product} />
            <ProductInfo product={product}/>
        </motion.div>
    )
}

export default observer(Product);
