import { ReactElement } from "react";
import { Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Search from "./pages/Search";
import Featured from "./pages/Featured";

const Router = (): ReactElement => {
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

export default Router;
