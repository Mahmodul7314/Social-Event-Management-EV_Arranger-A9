/* eslint-disable react/prop-types */
import DataCardsingle from "./DataCardsingle";



const DataCard = ({cardDatas}) => {
  
    return (
        <div>
               <div><h2 className="text-4xl text-black font-bold px-8 mb-6">Our Survices</h2></div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
           {
             cardDatas.map(cardData=> <DataCardsingle key={cardData.id} cardData={cardData}></DataCardsingle>) 
            }
           </div>
        </div>
    );
};

export default DataCard;