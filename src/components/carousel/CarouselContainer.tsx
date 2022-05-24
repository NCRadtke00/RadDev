import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = ["BackToSchoolSales.png", "March.png", "giveback.png", "summersale45.png", "freeshipping.png", "FallLine.png", "buyonegetone.png", "boatsboatsboats40.png","Birthday.png", "blackfridaysale.png"]
interface CarouselContainerProps {}

 const CarouselContainer: React.FC<CarouselContainerProps>= ({}) => {
  return (
    <Carousel

    >
     
      {images.map((image, index) => (
        <img key={index} src={`/images/slides/${image}`} alt="carousel"/>
        ))}
    </Carousel>
  )
}

export default CarouselContainer

