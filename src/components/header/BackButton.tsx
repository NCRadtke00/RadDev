import {useRouter} from "next/router";

interface Props {
    
}

const BackButton = (props: Props) => {
    return (
        
        <button className="mr-4 sm:mr-auto py-[0.33rem] px-[0.66rem] bg-white shadow-md rounded-lg text-sm relative">
            back
        </button>
    )
}

export default BackButton
