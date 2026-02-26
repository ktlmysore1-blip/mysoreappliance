import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BrandServicePage from './pages/BrandServicePage';
import ServiceCenterPage from './pages/ServiceCenterPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import FloatingButtons from './components/WhatsAppButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Scroll to top on route change
function ScrollToTop() {
    const { pathname, hash } = useLocation();

    React.useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [pathname, hash]);

    return null;
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/booking" element={<BookingPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/legal/:policyType" element={<LegalPage />} />

                        {/* Dynamic Route for AC Brand Product pages */}
                        <Route path="/services/ac/:brandSlug/:productSlug" element={<BrandServicePage />} />

                        {/* Dynamic Route for Service Centers */}
                        <Route path="/service-center/:slug" element={<ServiceCenterPage />} />

                        {/* Fallback */}
                        <Route path="*" element={<div className="p-40 text-center text-2xl font-bold text-primary">404 - Page Not Found</div>} />
                    </Routes>
                </main>

                <Footer />
                <FloatingButtons />
            </div>
        </Router>
    );
}

export default App;
