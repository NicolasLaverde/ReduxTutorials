import ProductItem from './ProductItem';
import classes from './Products.module.css';


const shoesProducts = [
  {
    id: 1,
    title: 'Pumma',
    price: 100,
    description: 'These are a Puma shoes!'
  },
  {
    id: 2,
    title: 'Nike',
    price: 250,
    description: 'These are a Nike shoes!'
  },
  {
    id: 3,
    title: 'Addidas',
    price: 150,
    description: 'These are a Adidas shoes!'
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {shoesProducts.map(({
          id,
          title,
          price,
          description
        })=> (
          <ProductItem
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
