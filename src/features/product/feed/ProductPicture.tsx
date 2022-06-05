import {motion} from "framer-motion";
import Image from "next/image"
import { Product } from "../../../types/product";
import styles from "../../../styles/product.module.css";



interface ProductPictureProps {
    product: Product;
}

const ProductPicture: React.FC<ProductPictureProps> = () => {
    return (
        <motion.div
        className={`w-full pb-[75%] relative overflow-hidden block rounded-t-lg product__image ${styles.productImage}`}
        >
          <Image
            src={"/images/default.jpg"}
            layout="fill"
            objectFit="contain"
            alt="default"
      />
    </motion.div>
    )
}

export default ProductPicture
