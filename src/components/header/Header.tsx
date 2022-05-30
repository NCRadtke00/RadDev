import BackButton from "./BackButton";

interface HeaderProps {
    
}
const Header : React.FC<HeaderProps> = () => {
    return (
        <div className="relative p-6 sm:p-12 sm:pb-0 flex items-center justify-end">
            {/* <img src={"public\favicon.ico"} /> */}
            <BackButton/>
            header search bar, pick language, Login
        </div>
    )
}
export default Header;