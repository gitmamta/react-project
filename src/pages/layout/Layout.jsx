import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Provider } from "react-redux";
import store from "../../components/store/store";

export default function Layout() {
  return (
    <>
      <div>
        <Provider store={store}>
          <Navbar />
          <div className="container">
            <Outlet />
          </div>
          <Footer />
        </Provider>
      </div>
    </>
  );
}
