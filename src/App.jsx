import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from './modules/small-assets/Header';
import Homepage from './modules/core-pages/Homepage';
import PortfolioPage from './modules/core-pages/PortfolioPage';
import ContactPage from './modules/core-pages/ContactPage';
import NoPage from "./modules/small-assets/NoPage";

export default function App() {

    return (
        <div className="dark:bg-gray-700 h-fit min-h-screen w-screen min-w-fit font-serif">

            <BrowserRouter basename="/portfoliopage" >

                <Routes>

                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Outlet />
                            </>
                        } >

                        <Route index element={<Homepage />} />

                        <Route path="portfolio" element={<PortfolioPage />} />

                        <Route path="contact" element={<ContactPage />} />

                        <Route path="*" element={<NoPage />} />

                    </Route >

                </Routes>

            </BrowserRouter>
        </div>
    );
}