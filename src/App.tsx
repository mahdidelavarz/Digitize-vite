import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import CartProvider from './context/Cart/CartProvider';
import InterestsProvider from "./context/interests/InterestsProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./Utils/ScrollToTop";

function App() {
  return (
    <div className='bg-slate-200 dark:bg-main-gray'>
      <Router>
      <ScrollToTop />
        <CartProvider>
          <InterestsProvider>
            <ToastContainer />
            <Routes>
              {routes.map((route) => {
                return <Route path={route.path} element={route.element} key={route.id} />
              })}
            </Routes>
          </InterestsProvider>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
