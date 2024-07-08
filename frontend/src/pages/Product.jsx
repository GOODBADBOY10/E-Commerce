import React, { useContext } from 'react'
import './css/Products.css'
import { ShopContext } from '../Context/ShopContext.jsx'
import {useParams} from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox.jsx'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts.jsx'

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </>
  )
}

export default Product
