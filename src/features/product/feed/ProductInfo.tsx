import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import {Product} from "../../../types/product"

interface ProductInfoProps {
    product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = () => {
    return (
        <div className="p-4 w-full flex flex-col justify-between flex-1">
            <span  className="py-1 px-2 mb-2 rounded-2xl text-[0.65rem] 
      uppercase tracking-[2px] bg-[#4e0b4b20]
      text-[#4e0b4b]"> pro sports</span>
            <h6 className="h-16 text-lg line-clamp-3">OG 71' Brewers BrewCrew, Blue and Yellow</h6>
            <div className="mt-auto pt-4 flex justify-between items-center">
                <p className="product__price">
                    <b className="text-2xl font-black">89.99</b>{" "}
                </p>
                <div className="text-base">
                    <StarRateRoundedIcon style={{color: "#f09"}}/>
                    {4.2}
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
