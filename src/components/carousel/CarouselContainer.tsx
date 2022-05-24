import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Image from 'next/image'
const images = ["BackToSchoolSale.png", "March.png", "giveback.png", "summersale45.png", "freeshipping.png", "FallLine.png", "buyonegetone.png", "boatsboatsboats40.png","Birthday.png", "blackfridaysale.png"]
interface CarouselContainerProps {}

 const CarouselContainer: React.FC<CarouselContainerProps>= ({}) => {
  return (
    <Carousel
    className="sm:m-12 sm:rounded-lg shadow-md overflow-hidden"
    showArrows= {false}
    showStatus= {false}
    infiniteLoop={true}
    autoPlay={true}
    showThumbs= {false}
    interval= {4500}
    transitionTime={200}
    >
      {images.map((image, index) => (
        <img key={index} src={`/images/slides/${image}`} alt="carousel" />
        ))}
        {/* shouldnt be using img and should be using imported Image from next/image but its causing the banners which are all sized great already to get wacky
         {images.map((image, index) => (
        <Image key={index} src={`/images/slides/${image}`} alt="carousel" width="" height="" layout="auto" />
        ))} */}
    </Carousel>
  )
}

export default CarouselContainer

