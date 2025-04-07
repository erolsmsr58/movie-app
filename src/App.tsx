import { Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Featured from "./pages/Featured";
import Search from "./pages/Search";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <BrowserRouter>
            <Container maxW="6xl" py={10}>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Search />} />
                    <Route path="/featured" element={<Featured />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
