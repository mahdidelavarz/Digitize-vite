import Navigation from "../components/Navigation";
import Footer from "../components/Footer"
import FooterMenu from "../components/menu/FooterMenu";
// import SideBarFilter from "../components/filters/SideBarFilter";

const Layout = ({ children }) => {
   
    return (
        <div>
            <Navigation />
            <section className="grid grid-cols-12 md:grid-rows-[50px-minmax(500px,_1fr)] md:gap-4 py-3  md:px-2">
                {children}
            </section>
            <Footer />
            <FooterMenu />
        </div>
    );
}

export default Layout;