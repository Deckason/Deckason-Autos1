"use client"
import styles from "./Login.module.css"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation"
import { useAppContext } from "@/app/context/ContextProvider"
import { authentication } from "../utils/firebaseConfiguration"

const Login = () => {

    const schema = yup.object().shape({
        email: yup.string().required("Email is required!").email("Email format is required"),
        password: yup.string().required("Password is required").min(6, "Min of 6 characters required"),
    })

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const {getDocument, usersRef, login, isLoading, setIsLoading,
            setIsVerified, currentUser,} = useAppContext()

    const {push} = useRouter()
    // console.log("Authentication "+authentication, "AuthCurrentUser "+authentication.currentUser, "stateUser "+currentUser)
    const handleLogin = async (data)=>{
        try {
            setIsLoading(true)
            const res = await login(data.email, data.password)
            // const user = await getDocument(usersRef)
            // if (user) {
            //     user.docs.forEach(doc => {
            //         if ((res.user.email == doc.data().email)) {
            //             setIsVerified(doc.data().verified)
                     res?push("/post-product"):""
            //         }
            //     })
            // }
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
        setIsLoading(false)
        // document.querySelector("form").reset()
    }

    return (<>
        <div className={styles.form_wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
                <h1>Login</h1>
                <div className={styles.inputCategory}>
                    <label htmlFor="">
                        <h4>Email</h4>
                        <input type="email" placeholder="Email" {...register("email")}/>
                        <small className={styles.errors}>{errors.email?.message}</small>
                    </label>
                    <label htmlFor="">
                        <h4>Password</h4>
                        <input type="password" placeholder="Password" {...register("password")}/>
                        <small className={styles.errors}>{errors.password?.message}</small>
                    </label>
                </div>
                <button type="submit" className={`btn ${styles.submit}`}>{isLoading?"Loading...":"Submit"}</button>
                <small className={styles.toggle_login}>Not yet Registered? <span onClick={()=>{push("/auth/register")}}>Register here</span></small>
            </form>
        </div>
    </>);
}
 
export default Login;