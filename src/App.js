import { Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Landing from "./components/Landing";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="firstpage" element={<FirstPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
