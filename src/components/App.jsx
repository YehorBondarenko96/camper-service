import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogePage = lazy(() => import('../pages/CatalogePage/CatalogePage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));

export function App() {
  
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage/>}/>
          <Route path="/catalog" element={<CatalogePage />} />
          <Route path="/favorites" element={<FavoritePage />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
};