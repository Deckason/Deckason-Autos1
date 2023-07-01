import Link from "next/link";
import styles from "./products.module.css"
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa"
import {ImLocation2} from "react-icons/im"
import {MdSpeed} from "react-icons/md"
import {GiSpanner, GiNotebook} from "react-icons/gi"
import {TbCurrencyNaira} from "react-icons/tb"
import product_img_1 from "../../../public/media/car images/FB_IMG_1615720872137.jpg"
import product_img_2 from "../../../public/media/car images/FB_IMG_16223932793306100.jpg"


const Products = () => {

    const carList = [
        {
            id: 1,
            name: "2007 Toyota Camry ",
            location: "Owerri, Imo State",
            condition: "Foreign Used",
            mileage: "3000km",
            price: "3,000,000.00",
            registration: "Registered"
        },
        {
            id: 2,
            name: "2007 Toyota Camry ",
            location: "Owerri, Imo State",
            condition: "Foreign Used",
            mileage: "3000km",
            price: "3,000,000.00",
            registration: "Registered"
        },
        {
            id: 3, 
            name: "2007 Toyota Camry ",
            location: "Owerri, Imo State",
            condition: "Foreign Used",
            mileage: "3000km",
            price: "3,000,000.00",
            registration: "Registered"
        },
        {
            id: 4,
            name: "2007 Toyota Camry ",
            location: "Owerri, Imo State",
            condition: "Foreign Used",
            mileage: "3000km",
            price: "3,000,000.00",
            registration: "Registered"
        },
        {
            id: 5,
            name: "2007 Toyota Camry ",
            location: "Owerri, Imo State",
            condition: "Foreign Used",
            mileage: "3000km",
            price: "3,000,000.00",
            registration: "Registered"
        },
        {
            id: 6,
            name: "2007 Toyota Camry ",
            location: "Owerri, Imo State",
            condition: "Foreign Used",
            mileage: "3000km",
            price: "3,000,000.00",
            registration: "Registered"
        }
    ]
    return (
        <>
            <div className={styles.products_wrapper}>
                <h1 className={`${styles.background_text}`}>
                    FEATURED
                </h1>
                <div className={styles.products_section}>
                    <div className={styles.head_section}>
                        <h1>FEATURED CARS</h1>
                        <Link href={""}>ALL CARS <FaArrowRight /></Link>
                    </div>
                    <div className={styles.products}>
                    {
                        carList.map(car =>(
                            <div className={styles.product_card}>
                                <div className={styles.product_img}>
                                    <Image 
                                        height={100}
                                        width={300}
                                        alt=""
                                        style={{'objectFit':"cover"}}
                                        src={product_img_1}
                                        className={styles.img_wrapper}
                                    />
                                    <p className={styles.price_tag}><TbCurrencyNaira/>{car.price}</p>
                                </div>
                                <div className={styles.product_description}>
                                    <h4 className={styles.product_name}>{car.name}</h4>
                                    <div className={styles.other_details}>
                                        <div className={styles.left_details}>
                                            <p className={styles.product_location}><ImLocation2 /> {car.location}</p>
                                            <p className={styles.product_mileage}><MdSpeed /> {car.mileage}</p>
                                        </div>
                                        <div className={styles.right_details}>
                                            <p className={styles.product_condition}><GiSpanner /> {car.condition}</p>
                                            <p className={styles.product_register}><GiNotebook /> {car.registration}</p>
                                        </div>
                                    </div>
                                    <div className={styles.price}>
                                        <p><TbCurrencyNaira/>{car.price}</p>
                                        <button className={`btn`}>View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                        
                    </div>
                </div>

            </div>
        </>
    );
}
 
export default Products;