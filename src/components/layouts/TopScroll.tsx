import { useRouter } from "next/router";
import {useEffect} from "react";
import React from 'react'

interface TopScrollProps {
    
}

const TopScroll: React.FC<TopScrollProps> = () => {
    const {pathname} = useRouter();
    useEffect(() =>{
        window.scroll({
            top:0,
            left:0,
            behavior:"smooth",
        });
    }, [pathname]);
    return (
    null
    )
}

export default TopScroll

