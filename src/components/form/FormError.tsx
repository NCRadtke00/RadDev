import { ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import React from 'react'
import { errorAnimation } from 'utilities/animations';
import { successMessages } from 'utilities/data';
interface FormErrorProps {
    error?: string;
}

const FormError: React.FC<FormErrorProps> = ({error}) => {
    return (
        <ErrorMessage
            name="error"
            render={() => (
                <motion.p
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={errorAnimation}
                    className={`py-2 px-4 text-[#f09] text-sm bg-[#ff005d] bg-opacity-5 rounded-lg w-full max-w-xs overflow-ellipsis overflow-hidden ${error && successMessages.some((message) => message === error) && "!bg-green-400 !bg-opacity-25 !text-green-900"}`}
                >
                    {error}
                </motion.p>
            )}
        />
    )
}
export default FormError;