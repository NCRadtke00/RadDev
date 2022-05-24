import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = ["BackToSchoolSales.png", "March.png", "giveback.png", "summersale45.png", "freeshipping.png", "FallLine.png", "buyonegetone.png", "boatsboatsboats40.png","Birthday.png", "blackfridaysale.png"]
interface CarouselContainerProps {}

 const CarouselContainer: React.FC<CarouselContainerProps>= ({}) => {
  return (
    <Carousel

    >
     {/* images will go here, will map and call each index */}
   
    </Carousel>
  )
}

export default CarouselContainer

