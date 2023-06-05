import { Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Loading from "./components/Loading";
import Chart1 from "./components/chart";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="firstpage" element={<FirstPage />} />
          <Route path="new" element={<Chart1 />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
