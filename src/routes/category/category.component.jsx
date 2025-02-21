import { useParams } from 'react-router-dom';
import ProductList from '../../components/product-list/product-list.component';
import shopData from '../../shop-data';

const Category = () => {
  const { category } = useParams();
  const products = shopData.find(item => item.title.toLowerCase() === category.toLowerCase())?.items;
  const categoryData = shopData.find(item => item.title.toLowerCase() === category.toLowerCase());

  return (
    <div>
      <h1>{categoryData?.title}</h1>
      {products && <ProductList products={products} />}
    </div>
  );
};

export default Category;
