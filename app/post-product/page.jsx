"use client"
import { useRouter } from "next/navigation";
import { useAppContext } from "../context/ContextProvider";
import ProductForm from "./ProductForm/ProductForm";
import { authentication } from "../utils/firebaseConfiguration";

const PostProduct = () => {
    const {loggedIn, user, isVerified} = useAppContext()
    const {push} = useRouter()
    console.log(isVerified, authentication.currentUser)
    return (
        <>
            {isVerified && <ProductForm />}
            {!isVerified && <h1>Not Yet Verified</h1>}
        </>
    );
}
 
export default PostProduct;