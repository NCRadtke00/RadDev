import { useEffect, useRef } from 'react'

interface OutsideClickProps {
    open: boolean;
    onClose: ()=>void;
}

const OutsideClick: React.FC<OutsideClickProps> = ({}) => {
    return (
        <div>
            if clicked inside of outside
        </div>
    )
}

export default OutsideClick
