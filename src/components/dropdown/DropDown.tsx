import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"
import {motion} from "framer-motion"
import {useState} from "react"
import DropDownItem from "./DropDownItem"
interface DropDownProps {
    className: string;
    items: string[];
    defaultItem: string;
    
}

const DropDown: React.FC<DropDownProps>= ({className, items, defaultItem}) => {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState(defaultItem);
    return (
        <>
        {/* need to check if clicked in our out as well as set a menu */}
            <span onClick={(e)=> {setActive((active) => !active);}}> {selected} <KeyboardArrowDown/></span> 
        </>
    )
}

export default DropDown
