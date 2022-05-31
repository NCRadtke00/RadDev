import {observer} from "mobx-react-lite"
import {useEffect, useRef} from "react"
import {useStore} from "../../stores/store"
import LoadingBar from 'react-top-loading-bar';

interface AppLayoutProps {
    
}

const AppLayout: React.FC<AppLayoutProps> = ({children}) => {
    const {appLoading} = useStore().commonStore;
    const loadingBar = useRef<any>(null);
    useEffect(() =>{
        if(appLoading){
            loadingBar.current?.continuousStart();
        }else{
            loadingBar.current.complete();
        }
    }, [appLoading]);
    return (
        <>
         <LoadingBar ref={loadingBar} height={3} color="#f07" shadow={true} />
         {children}
        </>
    )
}

export default observer(AppLayout);
