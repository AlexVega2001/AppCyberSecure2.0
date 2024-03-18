import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";
import LoginPage from "./pages/login/LoginPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import { PrivateRoute } from "./routes/privateRoutes";
import RegisterPage from "./pages/login/RegisterPage";
import { UserProvider } from "./context/UseProvider";

function App() {
  return (
    <BrowserRouter>
    <UserProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainLayout />
              </PrivateRoute>
            }
          >
            {routes}
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    </UserProvider>
    </BrowserRouter>
  );
}

export default App;
