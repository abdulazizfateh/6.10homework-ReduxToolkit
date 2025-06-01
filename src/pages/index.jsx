import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';
import { SuspenseCustom } from '../utils/utils';
// Layout
const Layout = lazy(() => import("./layout/Layout"));
// Main Pages
const Home = lazy(() => import("./home/Home"));
const Products = lazy(() => import("./products/Products"));
const Users = lazy(() => import("./users/Users"));
// Detail Pages
const ProductsDetail = lazy(() => import("./products-detail/ProductsDetail"));
const UsersDetail = lazy(() => import("./users-detail/UsersDetail"));
// Not Found Page
const NotFound = lazy(() => import("./not-found/NotFound"));
// Liked Page
const Liked = lazy(() => import("./liked/Liked"));
// Cart Page
// const Cart = lazy(() => import("./cart/Cart"));

const MainRouters = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<SuspenseCustom><Layout /></SuspenseCustom>}>
                    // Main Pages
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/users' element={<Users />} />
                    // Detail Pages
                    <Route path='/products/:id' element={<ProductsDetail />} />
                    <Route path='/users/:id' element={<UsersDetail />} />
                    // Not Found Page
                    <Route path='*' element={<NotFound />} />
                    // Liked Page
                    <Route path='/liked' element={<Liked />}></Route>
                    // Cart Page
                    {/* <Route path='/cart' element={<Cart />}></Route> */}
                </Route>
            </Routes>
        </>
    )
}

export default React.memo(MainRouters);