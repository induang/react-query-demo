import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Demo from "./pages/Demo";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Demo />
      </div>
    </QueryClientProvider>
  );
}

export default App;
