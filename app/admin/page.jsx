"use client"
import { useAppContext } from "../context/ContextProvider";
import Login from "../authentication/page";
import Register from "../post-product/register/Register";
import ProductForm from "./post-product/ProductForm/ProductForm";

const Authentication = () => {
    const {isLoginForm} = useAppContext()
    return (
        <>
        <ProductForm />
        {/* {isLoginForm?<Login /> : <Register />} */}
        </>
    );
}
 
export default Authentication;