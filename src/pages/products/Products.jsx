import React from 'react'
// Fetch hook
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
// Product Cards Component
import ProductCards from '../../components/ProductCards';

const Products = () => {
  const { data, loading } = useFetch("/products");
  return (
    <ProductCards data={data} loading={loading} />
  )
}

export default React.memo(Products);