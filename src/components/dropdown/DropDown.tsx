import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"
import {motion} from "framer-motion"
import OutsideClick from '../layouts/OutsideClick'
import {useState} from "react"
import DropDownItem from "./DropDownItem"
interface DropDownProps {
    className: string;
    menu?: string;
    items: string[];
    defaultItem: string;
    
}

const DropDown: React.FC<DropDownProps>= ({className, items, defaultItem, menu}) => {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState(defaultItem);
    return (
        <OutsideClick open={active} onClose={() => setActive(false)}>
            <span className={`py-[5px] pr-[2.5px] pl-[10px] bg-white shadow-md rounded-lg text-sm mr-4 flex items-center cursor-pointer relative ${className}`} onClick={(e)=> {setActive((active) => !active);}}> {selected} <KeyboardArrowDown/></span> 
        </OutsideClick>
    )
}

export default DropDown
