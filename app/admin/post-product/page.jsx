"use client"
import { useAppContext } from "@/app/context/ContextProvider";
import ProductForm from "./ProductForm/ProductForm";



const PostProductsPage = () => {
    const { isVerified } = useAppContext()
    return (<>
        {isVerified?<ProductForm />:
            <h1>You are not verified</h1>
        }
    </>);
}
 
export default PostProductsPage;