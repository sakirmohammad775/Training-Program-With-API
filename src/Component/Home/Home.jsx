import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import TabOne from "../Tab/TabOne";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            
            <Navbar></Navbar>
            <Slider></Slider>
            <TabOne></TabOne>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;