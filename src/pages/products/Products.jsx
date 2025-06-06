import React, { useEffect } from 'react'
// Fetch hook
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
// Product Cards Component
import ProductCards from '../../components/ProductCards';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const { data, loading } = useFetch("/products");

  return (
    <ProductCards data={data?.products} loading={loading} />
  )
}

export default React.memo(Products);