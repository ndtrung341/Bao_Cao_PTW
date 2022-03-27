import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import CartFeature from 'features/cart';
import NotFound from 'components/NotFound';
import AuthFeature from 'features/auth';
import MainLayout from 'layouts/MainLayout';
import FullScreenLayout from 'layouts/FullScreenLayout';
import ProductDetail from 'features/product/pages/ProductDetail';
import ProductList from 'features/product/pages/ProductList';

// const CollectionsFeature = React.lazy(() => import('features/collections'));
const ProductFeature = React.lazy(() => import('features/product'));
const HomePage = React.lazy(() => import('components/Home'));

function App() {
   return (
      <>
         <React.Suspense fallback={''}>
            <Routes>
               <Route path='/' element={<MainLayout />}>
                  <Route path='' element={<HomePage />} />
                  <Route element={<ProductFeature />