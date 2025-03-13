import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const ServiceDirectory = lazy(() => import('../pages/ServiceDirectory'));
const AssetDetails = lazy(() => import('../pages/AssetDetails'));
const Reports = lazy(() => import('../pages/Reports'));
const SearchPage = lazy(() => import('../pages/SearchPage'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterRoutes>
        <Route path="/" element={<ServiceDirectory />} />
        <Route path="/asset/:id" element={<AssetDetails />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/search" element={<SearchPage />} />
      </RouterRoutes>
    </Suspense>
  );
};

export default Routes;
