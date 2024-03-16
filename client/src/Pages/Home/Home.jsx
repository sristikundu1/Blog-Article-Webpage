import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MainNews from "../../Components/MainNews/MainNews";
import NAvbar from "../../Components/Navbar/NAvbar";


const Home = () => {
    return (
        <div>
            <Header/>
            <NAvbar/>
            <MainNews/>
            <Footer/>
        </div>
    );
};

export default Home;