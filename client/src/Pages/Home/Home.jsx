
import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MainNews from "../../Components/MainNews/MainNews";
import NAvbar from "../../Components/Navbar/NAvbar";
import RelatedNews from "../../Components/RelatedNews/RelatedNews";
import OverView from "../../Components/OverView/OverView";


const Home = () => {

    const [searchItem, setSearchItem] = useState([])
    const [clickedItem, setClickedItem] = useState([])

    const handleShowSearch = suggestion => {
        setSearchItem([suggestion]);

    }

    const handleCardClick = newsItem => {
        setClickedItem([newsItem]);
        
    };
    
    return (
        <div>
            <Header/>
            <NAvbar handleShowSearch={handleShowSearch}/>
            <MainNews searchItem={searchItem} clickedItem={clickedItem}/>
            <OverView/>
            <RelatedNews handleCardClick={handleCardClick}/>
            <Footer/>
        </div>
    );
};

export default Home;