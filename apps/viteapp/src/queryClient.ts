import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 30,
      networkMode: "always",
      retry: 1,
    },
  },
});

export default queryClient;
