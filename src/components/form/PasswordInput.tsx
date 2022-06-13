import { useState } from "react";
import TextInput from "./TextInput";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

interface PasswordInputProps {
    name: string;
    label: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({name,label}) => {
    const [visible,setVisible]= useState(false);

    return (
        <TextInput
            name={name}
            label={label}
            type={visible ? "text" : "password"}
            Icon={
             <>
             {visible ? (
                <VisibilityOutlinedIcon
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={() => setVisible((visible) => !visible)}
                />
            ):(
                <VisibilityOffOutlinedIcon
                    className="opacity-25 absolute top-4 right-4 cursor-pointer"
                    onClick={() => setVisible((visible) => !visible)}
                />)}
             </>
            }
        />
    );
};

export default PasswordInput
