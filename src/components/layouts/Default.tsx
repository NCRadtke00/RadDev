import SideBar from "../sidebar/Sidebar"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
interface DefaultLayoutProps {
    children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <div className="w-screen min-h-screen relative bg-[#fafafa] flex flex-col">
           <SideBar />
           <div className="sm:pr-24 w-full max-w-screen-1xl mx-auto flex-grow flex flex-col">
            <AnimatePresence exitBeforeEnter>
                <AnimateSharedLayout>
                    <Header />
                    {children}
                </AnimateSharedLayout>
                </AnimatePresence>
            </div> 
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
}

export default DefaultLayout;
