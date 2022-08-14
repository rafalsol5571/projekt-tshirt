import styles from './Product.module.scss';
import OptionForm from '../OptionForm/OptionForm';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';


const Product = ({name, colors, sizes, title, basePrice }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  const getPrice = useMemo(() => {
    return (
      basePrice +
      sizes.find((element) => element === currentSize).additionalPrice
    );
  }, [currentSize, basePrice, sizes]);

  const clickHandler = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('Name:', name);
    console.log('Price:', getPrice);
    console.log('Size:', currentSize.name);
    console.log('Color:', currentColor);
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <ProductImage name={name} currentColor={currentColor} title={title} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <OptionForm colors={colors} sizes={sizes} currentSize={currentSize} currentColor={currentColor} setCurrentSize={setCurrentSize} setCurrentColor={setCurrentColor} clickHandler={clickHandler} />
      </div>
    </article>
  )
};


Product.propTypes= {
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;