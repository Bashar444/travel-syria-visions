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
      {!isLoaded && !hasError && <div className="absolute inset-0 bg-[#F6F8FC] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#0018A8] border-t-transparent rounded-full animate-spin"></div>
        </div>}
      
      {hasError ? <div className="absolute inset-0 bg-[#EDF1F7] flex items-center justify-center">
          <span className="text-[#747474]">خطأ في تحميل الصورة</span>
        </div> : <img src={src} alt={alt} width={width} height={height} loading={priority ? "eager" : "lazy"} onLoad={handleLoad} onError={handleError} className="w-full h-full object-cover" />}
    </div>;
};
export default OptimizedImage;