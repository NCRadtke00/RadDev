import Button from "components/buttons/Button";
import {Form, Formik } from "formik"
import {motion} from "framer-motion"
import {pageSlide, pageTransition} from "../../../utilities/animations"
import * as Yup from "yup"

interface AdminPageProps {}

const AdminPage: React.FC<AdminPageProps>= () => {
    const validationScheme = Yup.object({
        title: Yup.string().required("Name is required"),
        category: Yup.string().required("Category is required"),
        desc: Yup.string().required("Description is required"),
        rating: Yup.number().required("Rating is required"),
        image: Yup.string().required("Image Url is required"),
        price: Yup.number().required("Price is required"),
        offer: Yup.bool().required("Choose if in offer or not"),
    });

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageSlide}
            transition={pageTransition}
            className="p-12"
        >
            
        </motion.div>
    )
}

export default AdminPage
