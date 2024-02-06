import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { CON_URL } from "../Utils/constants";
const RestaurantMenu = () => 
{
    const[resInfo,setResInfo] = useState(null);
    useEffect(() =>
    {
fetchMenu();
    },[]);
    const {resId} = useParams();
    const fetchMenu = async() =>
    {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.686409&lng=76.70115&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
            
        );
        const json = await data.json();
       
         setResInfo(json.data);
         
    };
    if(resInfo === null) return <Shimmer/>
    console.log(resInfo);
    const { name,cuisines,clouinaryImageId,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    return (
      
        <div className = "menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
           <h2>Menu</h2>
            <ul>
          {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} -{"Rs. "}
           {item.card.info.price/100 || item.card.info.defaultPrice/100}  {" "} 
           <img className="menu-logo" alt="no image"
                src = 
                {CON_URL+item.card.info.imageId
   }/>
           </li>)}
            </ul>
            </div>
    );
};

export default RestaurantMenu