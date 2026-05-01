import { Navigate, Route, Routes } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Company from "./pages/Company/Company";
import ProductsApplications from "./pages/ProductsApplications/ProductsApplications";
import ProductsApplicationsLayout from "./pages/ProductsApplications/ProductsApplicationsLayout";
import HealingWellness from "./pages/ProductsApplications/HealingWellness";
import HomeComfort from "./pages/ProductsApplications/HomeComfort";
import TabletopDining from "./pages/ProductsApplications/TabletopDining";
import ActiveCare from "./pages/ProductsApplications/ActiveCare";
import Certificate from "./pages/Certificate/Certificate";
import Sustainability from "./pages/Sustainability/Sustainability";
import Contact from "./pages/Contact/Contact";
import "./App.css";

function App() {
    return (
        <div className="app">
            <TopNav />
            <div className="content" role="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/company" element={<Company />} />
                    <Route
                        path="/products-applications/*"
                        element={<ProductsApplicationsLayout />}
                    >
                        <Route index element={<ProductsApplications />} />
                        <Route
                            path="healing-wellness"
                            element={<HealingWellness />}
                        />
                        <Route path="home-comfort" element={<HomeComfort />} />
                        <Route
                            path="tabletop-dining"
                            element={<TabletopDining />}
                        />
                        <Route path="active-care" element={<ActiveCare />} />
                    </Route>
                    <Route path="/certificate" element={<Certificate />} />
                    <Route
                        path="/sustainability"
                        element={<Sustainability />}
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
