import { motion } from "framer-motion";
import {pageSlide, pageTransition} from "../../utilities/animations"
import CarouselContainer from "../../components/carousel/CarouselContainer";
import ProductCategories from "../../features/product/feed/ProductCategories"
import ProductMain from "../product/feed/ProductFeed";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";

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
           
            <Header/>
            <CarouselContainer /> <Sidebar />
            <ProductCategories />
            <ProductMain />
            <Footer/>
            
        </motion.div>
    )

}


export default HomePage

