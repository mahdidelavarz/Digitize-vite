import * as data from "../../data";
import Product from "./Product";
import { ProductSkeleton } from "../common/Loading";
import useLoading from "../../hooks/useLoading";
import { useSearchParams } from "react-router-dom";

const ProductList = ({ category }) => {
  const [searchParams] = useSearchParams();
  const isLoading = useLoading();

  const serializeFormQuery = () => {
    const allParams = {};
    for (const entry of searchParams.entries()) {
      const [key, value] = entry;
      allParams[key] = value;
    }
    return allParams;
  };
  const currentCategoryProducts = data.products.filter(
    (item) => item.category === category
  );
  const filtersObject = {};
  Object.keys(serializeFormQuery()).forEach((key) => {
    const [filterKey, filterValue] = key.split("_");
    const settledFilterValue = filtersObject[filterKey];
    if (settledFilterValue) {
      filtersObject[filterKey] = [...settledFilterValue, filterValue];
    } else {
      filtersObject[filterKey] = [filterValue];
    }
  });
  const finalProducts = [];
  let filteredProducts = currentCategoryProducts.filter((product) => {
    return Object.entries(filtersObject).every(([prop, find]) => {
      const convertStrToNumber = find.map((num) => parseInt(num));
      return convertStrToNumber.includes(product[prop]);
    });
  });
  new Set(filteredProducts).forEach((item) => {
    finalProducts.push(item);
  });
  console.log(finalProducts);
  return (
    <main className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 col-span-12 md:col-span-9 rounded-md p-2">
      {finalProducts.map((product) => {
        return isLoading ? (
          <Product product={product} key={product.id} />
        ) : (
          <ProductSkeleton />
        );
      })}
    </main>
  );
};

export default ProductList;
