import React, { memo, useEffect } from 'react';
import FullScreenLoading from 'shared/components/FullScreenLoading';
import { Page, shadowStyle } from 'shared/styles';
import { useProductDetail } from 'utils/customHooks/useProducts';
import { ProductDetailProps } from 'utils/types/Router';
import ProductView from './components/ProductView';
import { ProductViewContainer } from './components/ProductView/styles';

const ProductDetail: React.FC<ProductDetailProps> = ({ route }) => {
  const [product, isFetching, fetchProduct] = useProductDetail();
  const {
    params: { sku },
  } = route;

  useEffect(() => {
    fetchProduct(sku);
  }, [fetchProduct, sku]);

  return (
    <Page>
      <ProductViewContainer style={shadowStyle}>
        {product && <ProductView product={product} />}
        <FullScreenLoading active={isFetching} />
      </ProductViewContainer>
    </Page>
  );
};

export default memo(ProductDetail);
