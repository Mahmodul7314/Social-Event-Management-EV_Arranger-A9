import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "./CardDetail";


const CardDetails = () => {

    const allData = useLoaderData();
    const {id} = useParams();
    const idNum = parseInt(id);
 
    const [dataCard,setDataCard] = useState();
    useEffect(()=>{
        const FindMatchData = allData.find(data=> data.id === idNum);
        setDataCard(FindMatchData);
   
    },[])


    return (
        <div>
            <CardDetail CardDetail={dataCard}></CardDetail>
        </div>
    );
};

export default CardDetails;