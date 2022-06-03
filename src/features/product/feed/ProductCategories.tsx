import { categories } from "../../../utilities/data"
import ProductCategory from "./ProductCategory";
interface ProductCategoriesProps {
    
}

const ProductCategories: React.FC<ProductCategoriesProps> = () => {
    return (
        <div
        className="m-6 sm:mt-3 sm:-mb-4 sm:mx-12 flex whitespace-nowrap overflow-scroll scrollbar-hide relative">
            {categories.map((category, index) => <ProductCategory key={index} category={category}/>)}
            
        </div>
    )
}

export default ProductCategories
