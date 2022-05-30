import HomePage from "../features/home/HomePage";
import Head from 'next/head'
import { observer } from "mobx-react-lite";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
 return (
   <>
   <Head>
     <title> 3QTees </title>
   </Head>
     <HomePage/>
   </>
 )
}

export default observer(Home);

