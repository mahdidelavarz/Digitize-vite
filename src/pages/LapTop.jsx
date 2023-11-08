import Layout from "../Layout/Layout";
import ProductList from "../components/products/ProductList";
import SortMenu from "../components/menu/SortMenu";
import SideBarFilter from "../components/filters/SideBarFilter";
import SortMobile from "../components/filters/SortMobile";
const Laptop = () => {
  return (
    <div>
      <Layout>
        <SortMobile category='laptop'/>
        <SideBarFilter category="laptop" />
        <SortMenu category="laptop" />
        <ProductList category="laptop" />
      </Layout>
    </div>
  );
};

export default Laptop;
