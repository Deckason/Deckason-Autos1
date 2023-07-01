import styles from "./foreign.module.css"
import AsideNav from "../components/AsideNav/AsideNav";
import Products from "../components/products/Products";

const ForeignUsed = () => {

    return (
        <div className={`aside_product_container ${styles.foreign_used}`}>
            <div className={`aside_container ${styles.aside_container}`}>
                <AsideNav />
            </div>
            <div className={`product_container ${styles.product_container}`}>
                <Products />
            </div>
        </div>
    );
}
 
export default ForeignUsed;