
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
    return '<div>Error rendering page</div>';
  }
}
