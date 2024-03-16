
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MainNews from "../../Components/MainNews/MainNews";
import NAvbar from "../../Components/Navbar/NAvbar";
import RelatedNews from "../../Components/RelatedNews/RelatedNews";


const Home = () => {
    
    return (
        <div>
            <Header/>
            <NAvbar/>
            <MainNews/>
            <RelatedNews/>
            <Footer/>
        </div>
    );
};

export default Home;