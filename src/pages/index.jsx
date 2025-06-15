import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';
// Layout
const Layout = lazy(() => import("./layout/Layout"));
// Main Pages
const Products = lazy(() => import("./products/Products"));
// Detail Pages
const ProductsDetail = lazy(() => import("./products-detail/ProductsDetail"));
// Not Found Page
const NotFound = lazy(() => import("./not-found/NotFound"));
// Liked Page
const Liked = lazy(() => import("./liked/Liked"));
// Cart Page
const Cart = lazy(() => import("./cart/Cart"));
// Auth - Sign In
const SignIn = lazy(() => import("./auth/SignIn"));

const MainRouters = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    // Main Pages
                    <Route path='/' element={<Products />} />
                    // Detail Pages
                    <Route path='/products/:id' element={<ProductsDetail />} />
                    // Not Found Page
                    <Route path='*' element={<NotFound />} />
                    // Liked Page
                    <Route path='/liked' element={<Liked />}></Route>
                    // Cart Page
                    <Route path='/cart' element={<Cart />}></Route>
                </Route>

                // Auth - Sign In
                <Route path='/sign-in' element={<SignIn />} />
            </Routes>
        </>
    )
}

export default React.memo(MainRouters);