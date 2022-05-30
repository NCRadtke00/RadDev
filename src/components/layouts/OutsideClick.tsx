import { useEffect, useRef } from 'react'

interface OutsideClickProps {
    open: boolean;
    onClose: ()=>void;
}

const OutsideClick: React.FC<OutsideClickProps> = ({opened, onClose, children}) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const checkIfOutsideClick = (e:any) =>{
            if(opened && ref.current && !ref.current.contains(e.target)){
                onClose();
            }
        };
        document.addEventListener('mousedown', checkIfOutsideClick);
        return () => {
            document.removeEventListener('mousedown', checkIfOutsideClick);
        }
    }, [opened, onClose]);

    return (
        <div ref={ref}>
            {children}
        </div>
    )
}

export default OutsideClick
