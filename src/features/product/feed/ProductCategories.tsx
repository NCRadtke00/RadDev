import { categories } from "../../../utilities/data"

interface ProductCategoriesProps {
    
}

const ProductCategories: React.FC<ProductCategoriesProps> = () => {
    return (
        <div >
            {categories.map((category, index) => category)}
        </div>
    )
}

export default ProductCategories
