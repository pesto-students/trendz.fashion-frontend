import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavSideBarContainer from '../../components/navSidebarContainer/NavSideBarContainer';
import Dropdown from '../../components/input/Dropdown';
import Loader from '../../components/loader/Loader';
import styles from './styles.module.scss';

import productAction from '../../redux/actions/productAction';
import PrimaryButton from '../../components/input/PrimaryButton';
import OutlineButton from '../../components/input/OutlineButton';

const SingleProduct = ({ match }) => {
  const productId = match.params.id;
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(productAction.getProduct(productId));
  }, []);

  const ColorBox = ({ color }) => (
    <span className={styles.colorBox} style={{ background: color }}></span>
  );

  const colors = ['#fff', '#000', '#da5255', '#5ab378', '#4a98d7', '#e2b484'];

  const quantityOptions = [
    { title: '01', value: '01' },
    { title: '02', value: '02' },
    { title: '03', value: '03' },
    { title: '04', value: '04' },
    { title: '05', value: '05' },
    { title: '06', value: '06' },
    { title: '07', value: '07' },
    { title: '08', value: '08' },
    { title: '09', value: '09' },
    { title: '10', value: '10' },
  ];

  const sizeOptions = [
    { title: '06', value: '06' },
    { title: '07', value: '07' },
    { title: '08', value: '08' },
    { title: '09', value: '09' },
    { title: '10', value: '10' },
    { title: '11', value: '11' },
    { title: '12', value: '12' },
  ];

  return (
    <NavSideBarContainer>
      {product ? (
        <div className={styles.appContent}>
          <div className={styles.productImageContainer}>
            <center>
              <img src={product.image} className={styles.productImage} loading="lazy" />
            </center>
          </div>
          <div className={styles.productDetailContainer}>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <h2 className={styles.productPrice}>₹ {product.price}</h2>
            <h2 className={styles.productDescription}>{product.description}</h2>
            <h3 className="heading18Grey">Select Color</h3>
            <div className={styles.flexRow}>
              {colors.map((color) => (
                <ColorBox key={color} color={color} />
              ))}
            </div>
            <div className={styles.flexRow}>
              <Dropdown className={styles.dropdown} options={sizeOptions} title="Select Size" />
              <Dropdown className={styles.dropdown} options={quantityOptions} title="Quantity" />
            </div>
            <div className={styles.flexRow}>
              <PrimaryButton title="Add to cart" className={styles.addToCartButton} />
              {/* <OutlineButton title="F" className={styles.favoriteButton} /> */}
            </div>
          </div>
        </div>
      ) : (
          <Loader />
        )}
    </NavSideBarContainer>
  );
};

export default SingleProduct;
