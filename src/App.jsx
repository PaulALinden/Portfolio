import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from './modules/Header';
import Homepage from './modules/homepage/Homepage';
import PortfolioPage from './modules/portfolioPage/PortfolioPage';
import ContactPage from './modules/contactPage/ContactPage';
import NoPage from "./modules/NoPage";

export default function App() {

    return (
        <div className="dark:bg-gray-700 h-fit min-h-screen w-screen min-w-fit font-serif">

            <BrowserRouter>

                <Routes>

                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Outlet />
                            </>
                        } >

                        <Route index path="" element={<Homepage />} />

                        <Route path="portfolio" element={<PortfolioPage />} />

                        <Route path="contact" element={<ContactPage />} />

                        <Route path="*" element={<NoPage />} />

                    </Route >

                </Routes>

            </BrowserRouter>
        </div>
    );
}