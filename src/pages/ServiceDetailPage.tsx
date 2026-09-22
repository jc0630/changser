import { useParams, Navigate } from 'react-router-dom';
import { DesignPlanning } from './services/DesignPlanning';
import { Construction } from './services/Construction';
import { FireproofSystems } from './services/FireproofSystems';
import { FaceliftRenovation } from './services/FaceliftRenovation';

export function ServiceDetailPage() {
  const { serviceId } = useParams();

  switch (serviceId) {
    case 'design-planning':
      return <DesignPlanning />;
    case 'construction':
      return <Construction />;
    case 'fireproof-systems':
      return <FireproofSystems />;
    case 'facelift-renovation':
      return <FaceliftRenovation />;
    default:
      // If serviceId is invalid, redirect to the main services page
      return <Navigate to="/services" replace />;
  }
}
