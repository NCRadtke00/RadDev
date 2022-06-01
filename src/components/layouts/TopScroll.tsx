import { useRouter } from "next/router";
import {useEffect} from "react";
import React from 'react'

interface TopScrollProps {
    
}

const TopScroll: React.FC<TopScrollProps> = () => {
    const {pathname} = useRouter();
    
    return (
        <div>
            
        </div>
    )
}

export default TopScroll

