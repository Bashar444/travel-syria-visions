
import { useEffect, useState } from 'react';
import Loading from './Loading';

interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  showLoading?: boolean;
}

const ClientOnly = ({ children, fallback = null, showLoading = false }: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    if (showLoading) {
      return <Loading size="sm" message="Initializing..." />;
    }
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default ClientOnly;
