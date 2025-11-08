
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export function render(url: string) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false,
      },
    },
  });

  const helmetContext = {};

  try {
    const html = ReactDOMServer.renderToString(
      <QueryClientProvider client={queryClient}>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </QueryClientProvider>
    );

    return html;
  } catch (error) {
    console.error('SSR rendering error:', error);
    
    // Return meaningful fallback content instead of generic error
    return `
      <div class="min-h-screen bg-gray-50 flex items-center justify-center">
        <div class="max-w-md mx-auto text-center p-6">
          <h1 class="text-2xl font-bold text-gray-900 mb-4">Travel.Ltd - University Admissions</h1>
          <p class="text-gray-600 mb-6">Professional university admission services for Syrian students</p>
          <div class="space-y-4">
            <div>
              <h2 class="font-semibold text-lg">Our Services:</h2>
              <ul class="text-sm text-gray-600 mt-2">
                <li>• University Admissions Consulting</li>
                <li>• Student Visa Processing</li>
                <li>• Hajj & Umrah Services</li>
                <li>• Saudi Scholarship Programs</li>
              </ul>
            </div>
            <div>
              <p class="text-sm">Contact: +963985453247</p>
              <p class="text-sm">Email: alhusseinamjad904@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
