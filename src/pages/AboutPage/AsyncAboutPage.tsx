import {lazy} from "react";
import AboutPage from "./AboutPage";

export const AsyncAboutPage = lazy(()=> new Promise(resolve=>{
    // @ts-ignore
    setTimeout(()=> resolve(import('./AboutPage')), 5000)
}))