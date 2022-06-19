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
        <OutsideClick opened={active} onClose={() => setActive(false)}>
            <span className={`py-[5px] pr-[2.5px] pl-[10px] bg-slate-200 shadow-md rounded-lg text-sm mr-4 flex items-center cursor-pointer relative ${className}`} onClick={(e)=> {
                e.preventDefault();
                e.stopPropagation();
                setActive((active) => !active);
                }}
            >
                {selected} 
                <KeyboardArrowDown className={` opacity-75 !transition-transform !duration-200 transform rotate-0 scale-x-90 scale-y-95 ${active && "-rotate-180 scale-x-90 scale-y-95"}`}/>
                {active &&(
                    <motion.ul className={`bg-gray-100 rounded-lg absolute top-10 right-0 list-none shadow-md z-10 h-44 overflow-scroll scrollbar-hide ${menu}`}
                    initial ={{opacity:0, y:"-10%"}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y:"-10%"}}>
                        {items.map((item,index)=> (
                            <DropDownItem
                                key={index}
                                item={item}
                                onClick={(e) => {
                                    setSelected(item);
                                    setActive(false);
                                    e.stopPropagation();}}
                            />
                        ))}
                    </motion.ul>
                    )}
                </span> 
        </OutsideClick>
    )
}

export default DropDown
