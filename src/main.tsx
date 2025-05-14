import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.tsx";
import { TempoDevtools } from "tempo-devtools";

// Initialize Tempo Devtools only in development or when VITE_TEMPO is true
if (import.meta.env.DEV || import.meta.env.VITE_TEMPO === "true") {
  TempoDevtools.init();
}

// Initialize MSW in development mode
if (import.meta.env.DEV) {
  const initMocks = async () => {
    const { worker } = await import("./test/mocks/browser");
    worker.start({
      onUnhandledRequest: "bypass",
    });
  };

  initMocks();
}

// Configure React Query client with sensible defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Add error handling for uncaught errors
window.addEventListener("error", (event) => {
  console.error("Uncaught error:", event.error);
  // You could send to an error tracking service here
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
