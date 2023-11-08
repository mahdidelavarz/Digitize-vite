import Layout from "../Layout/Layout";
import ProductList from "../components/products/ProductList";
import SortMenu from "../components/menu/SortMenu";
import SideBarFilter from "../components/filters/SideBarFilter";
import SortMobile from "../components/filters/SortMobile";
const Phone = () => {
    return (
        <div>
            <Layout>
            <SortMobile category='phone'/>
                <SideBarFilter category='phone'/>
                <SortMenu category='phone'/>
               <ProductList category='phone'/>
            </Layout>
        </div>
    );
}

export default Phone ;