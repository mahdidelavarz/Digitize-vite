import Layout from "../Layout/Layout";
import ProductList from "../components/products/ProductList";
import SortMenu from "../components/menu/SortMenu";
import SideBarFilter from "../components/filters/SideBarFilter";
import SortMobile from "../components/filters/SortMobile";
const Watch = () => {
  return (
    <div>
      <Layout>
      <SortMobile category='watch'/>
        <SideBarFilter category="watch" />
        <SortMenu category="watch" />
        <ProductList category="watch" />
      </Layout>
    </div>
  );
};

export default Watch;
