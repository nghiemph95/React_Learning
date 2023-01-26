import productApi from 'api/productApi';
import { useEffect, useState } from 'react';

export default function useProductDetail(productId) {
  /** States */
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  /** Life Circle */
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await productApi.get(productId);
        console.log({ result });
        setProduct(result);
      } catch (error) {
        console.log('Failed to query data productDetail', error);
      }

      setLoading(false);
    })();
  }, [productId]);

  return { product, loading };
}
