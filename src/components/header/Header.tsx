
interface HeaderProps {
    
}
const Header : React.FC<HeaderProps> = () => {
    return (
        <div className="relative p-6 sm:p-12 sm:pb-0 flex items-center justify-end">
            {/* <img src={"public\favicon.ico"} /> */}
            header search bar, backbutton, pick languages
        </div>
    )
}
export default Header;