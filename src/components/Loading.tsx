
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ 
  message = "جاري التحميل...", 
  size = 'md',
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const containerClasses = fullScreen 
    ? "fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"
    : "flex items-center justify-center p-8";

  return (
  <div className={containerClasses} role="status" aria-label="جاري التحميل">
      <div className="text-center">
        <Loader2 className={`${sizeClasses[size]} animate-spin text-[#0018A8] mx-auto mb-4`} />
        <p className="text-sm text-gray-600 max-w-xs">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Loading;
