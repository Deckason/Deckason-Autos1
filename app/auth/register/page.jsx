"use client"
import styles from "./Register.module.css"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useAppContext } from "@/app/context/ContextProvider"
import { useRouter } from "next/navigation"
import { authentication } from "@/app/utils/firebaseConfiguration"

const Register = () => {

    const schema = yup.object().shape({
        username: yup.string().required("Username is required!"),
        email: yup.string().required("Email is required!").email("Email format is required"),
        password: yup.string().required("Password is required").min(6, "Min of 6 characters required"),
        confirmPassword: yup.string().required("Confirm password is required!").oneOf([yup.ref("password")], "Password do not match"),
    })

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const {push} = useRouter()
    const {creatAccount, isLoading, setIsLoading, user,
        setIsVerified, usersRef, addDocument} = useAppContext()

        console.log(authentication.currentUser)

    const handleRegister = async (data)=>{
        try {
            setIsLoading(true)
            setIsVerified(false)
            const res = await creatAccount(data.email, data.password)
            if (res) {
                const userDetails = {
                    userId: res.user.uid,
                    username: data.username,
                    email: res.user.email,
                    verified: false
                }
                const user = await addDocument(usersRef, userDetails)
                user?push("/post-product"):""
            }
            setIsLoading(false)
        }catch (error) {
            setIsLoading(false)
            console.log(error)
        }
        setIsLoading(false)
    }

    return (<>
        <div className={styles.form_wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(handleRegister)}>
                <h1>Register</h1>
                <div className={styles.inputCategory}>
                <label htmlFor="">
                        <h4>Username</h4>
                        <input type="text" placeholder="Username" {...register("username")}/>
                        <small className={styles.errors}>{errors.username?.message}</small>
                    </label>
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
                    <label htmlFor="">
                        <h4>Confirm Password</h4>
                        <input type="password" placeholder="Confirm Password" {...register("confirmPassword")}/>
                        <small className={styles.errors}>{errors.confirmPassword?.message}</small>
                    </label>
                </div>
                <button type="submit" className={`btn ${styles.submit}`}>{isLoading?"Loading...":"Submit"}</button>
                <small className={styles.toggle_login}>Already have an account? <span onClick={()=>push("/auth")}>Login here</span></small>
            </form>
        </div>
    </>);
}
 
export default Register;