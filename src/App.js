import { Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
