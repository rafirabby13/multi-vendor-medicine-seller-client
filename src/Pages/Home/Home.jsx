/* eslint-disable no-unused-vars */
import Footer from "../../Shared/Footer.jsx";
import Navbar from "../../Shared/Navbar.jsx";
import Banner from "./Banner.jsx";
import MedicineCategory from "./MedicineCategory/MedicineCategory.jsx";

const Home = () => {
    return (
        <div>
           <Banner/>
           <MedicineCategory/>
            {/* <Footer/> */}
        </div>
    );
};

export default Home;