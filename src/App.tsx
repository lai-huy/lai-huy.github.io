import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, startTransition, Suspense } from "react";
import "./App.css";
const Home = lazy(() => import("./components/Home"));
const Loading = lazy(() => import("./components/Loading"));
const Layout = lazy(() => import("./components/Layout/"));
const Portfolio = lazy(() => import("./components/Portfolio/"));
const Qualifications = lazy(() => import("./components/Qualifications"));
const Service = lazy(() => import("./components/Service"))

function App() {
    return (
        <BrowserRouter>
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route
                        path="/qualifications"
                        element={<Qualifications />}
                    />
                    <Route path="/service" element={<Service />} />
                </Route>
            </Routes>
        </Suspense>
        </BrowserRouter>
    );
}

export default App;
