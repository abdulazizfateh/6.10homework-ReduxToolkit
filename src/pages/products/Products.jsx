import React, { useEffect } from 'react'
// Fetch hook
import useFetch from '../../hooks/useFetch';
// Product Cards Component
import ProductCards from '../../components/ProductCards';
import CategoryList from '../../components/CategoryList';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const { data, loading } = useFetch("/products");

  useEffect(() => {
    if (!(localStorage.getItem("token"))) {
      navigate("/sign-in");
    }
  }, [])

  return (
    <>
      {/* <CategoryList /> */}
      <ProductCards data={data?.products} loading={loading} />
    </>
  )
}

export default React.memo(Products);