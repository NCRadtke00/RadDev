import { motion } from "framer-motion";
import {pageSlide, pageTransition} from "../../utilities/animations"
import CarouselContainer from "../../components/carousel/CarouselContainer";
import ProductCategories from "../../features/product/feed/ProductCategories"
import ProductMain from "../product/feed/ProductFeed";


interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    return (
        <motion.div
            initial= "initial"
            animate= "in"
            exit= "out"
            variants={pageSlide}
            transition={pageTransition}
        >
            <CarouselContainer /> 
            <ProductCategories />
            <ProductMain />
        </motion.div>
    )

}


export default HomePage

