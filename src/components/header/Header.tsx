import DropDown from "../dropdown/DropDown";
import BackButton from "./BackButton";
import {languages} from '../../utilities/data'

interface HeaderProps {
    
}
const Header : React.FC<HeaderProps> = () => {
    return (
        <div className="relative p-6 sm:p-12 sm:pb-0 flex items-center justify-end">
            {/* <img src={"public\favicon.ico"} /> */}
            <BackButton />
            <DropDown className="hidden sm:flex" items={languages} defaultItem={languages[0]}/>
            
        </div>
    )
}
export default Header;