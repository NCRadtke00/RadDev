import { observer } from "mobx-react-lite"


interface ProductCategoryProps {
    category: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ category }) => {

    return (
        <span className={`text-lg relative p-4 sm:ml-4 opacity-50 transition-opacity duration-400 cursor-pointer capitalize hover:opacity-50 before:underline hover:before:w-1/3 hover:font-bold`} style={{ flex: "0 0 auto" }}>
            {category}
        </span>
    )
}

export default observer(ProductCategory);
