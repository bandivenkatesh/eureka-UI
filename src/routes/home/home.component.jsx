import { Outlet, Link } from 'react-router-dom';
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
    {
      id: 6,
      title: 'Accessories',
      imageUrl: 'https://picsum.photos/300/300?random=1',
    },
    {
      id: 7,
      title: 'Shoes',
      imageUrl: 'https://picsum.photos/300/300?random=2',
    },
    {
      id: 8,
      title: 'Dresses',
      imageUrl: 'https://picsum.photos/300/300?random=3',
    },
    {
      id: 9,
      title: 'T-shirts',
      imageUrl: 'https://picsum.photos/300/300?random=4',
    },
    {
      id: 10,
      title: 'Pants',
      imageUrl: 'https://picsum.photos/300/300?random=5',
    },
    {
      id: 11,
      title: 'Bags',
      imageUrl: 'https://picsum.photos/300/300?random=6',
    },
    {
      id: 12,
      title: 'Jewelry',
      imageUrl: 'https://picsum.photos/300/300?random=7',
    },
    {
      id: 13,
      title: 'Watches',
      imageUrl: 'https://picsum.photos/300/300?random=8',
    },
  ];

  return (
    <HomeContainer>
      <CategoriesContainer>
        {categories.map((category, index) => (
          <Link to={`/category/${category.title}`} key={category.id}>
            <CategoryItem index={index}>
              <img src={category.imageUrl} alt={category.title} />
              <div className="content">
                <h2>{category.title}</h2>
                <p>Shop Now</p>
              </div>
            </CategoryItem>
          </Link>
        ))}
      </CategoriesContainer>
      <Outlet />
    </HomeContainer>
  );
};

export default Home;
