import { useState } from 'react';
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}
const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setHasError(true);
  return <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#EE3524] border-t-transparent rounded-full animate-spin"></div>
        </div>}
      
      {hasError ? <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">خطأ في تحميل الصورة</span>
        </div> : <img src={src} alt={alt} width={width} height={height} loading={priority ? "eager" : "lazy"} onLoad={handleLoad} onError={handleError} className="delete the image from this website object-contain" />}
    </div>;
};
export default OptimizedImage;