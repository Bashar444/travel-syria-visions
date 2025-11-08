
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Home, MessageCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleContact = () => {
    window.open('https://wa.me/+963985453247', '_blank');
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-md mx-auto text-center bg-white rounded-lg shadow-lg p-6">
            <div className="text-red-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            <h1 className="text-xl font-bold text-gray-900 mb-2">
              عذراً، حدث خطأ غير متوقع
            </h1>
            <p className="text-sm text-gray-600 mb-2">
              Sorry, an unexpected error occurred
            </p>
            
            <p className="text-gray-600 mb-6">
              نعتذر عن هذا الإزعاج. يرجى المحاولة مرة أخرى أو الاتصال بنا للحصول على المساعدة.
            </p>

            <div className="space-y-3">
              <Button 
                onClick={this.handleRetry}
                className="w-full bg-[#0018A8] hover:bg-[#00A3E0] text-white flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                المحاولة مرة أخرى / Try Again
              </Button>
              
              <Button 
                onClick={this.handleGoHome}
                variant="outline"
                className="w-full border-[#0018A8] text-[#0018A8] hover:bg-[#F6F8FC] flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                العودة للرئيسية / Go Home
              </Button>
              
              <Button 
                onClick={this.handleContact}
                variant="outline"
                className="w-full border-green-500 text-green-600 hover:bg-green-50 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                اتصل بنا / Contact Us
              </Button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">Error Details (Dev)</summary>
                <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
