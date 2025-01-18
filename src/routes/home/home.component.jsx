import { Outlet } from 'react-router-dom';
import { HomeContainer, CategoriesContainer, CategoryItem } from './home.styles';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return (
    <HomeContainer>
      <CategoriesContainer>
        {categories.map((category, index) => (
          <CategoryItem key={category.id} index={index}>
            <img src={category.imageUrl} alt={category.title} />
            <div className="content">
              <h2>{category.title}</h2>
              <p>Shop Now</p>
            </div>
          </CategoryItem>
        ))}
      </CategoriesContainer>
      <Outlet />
    </HomeContainer>
  );
};

export default Home;
