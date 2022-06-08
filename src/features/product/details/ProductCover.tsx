import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores/store";
import Image from "next/image";

interface ProductCoverProps {
}

const ProductCover: React.FC<ProductCoverProps> = () => {

    return (
        <motion.div>
            <Image layout="fill" objectFit="contain" src={image} alt = {title} className=" absolute p-4"/>
        </motion.div>
    )
}

export default observer(ProductCover);
