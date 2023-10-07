import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import DataCard from "../../components/DataCard/DataCard";
import Img from "../../components/Img";
import ChooseUs from "../../components/ChooseUs";



const Home = () => {
    const cardsData = useLoaderData();
    console.log(cardsData);
    return (
        <div>
            <Banner></Banner>
           {
            <DataCard cardDatas={cardsData}></DataCard>
           }
           <h2 className="text-4xl text-black font-bold px-6 mt-8">Our Event Gallary</h2>
           <Img></Img>
           <h2 className="text-4xl text-black font-bold px-6 mt-14 mb-6">Why Chose Us</h2>
           <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;