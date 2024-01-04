import { CON_URL } from "../Utils/constants";
const 
RestaurantCard = (props) =>
{
    const {resdata} = props;
    
   return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            
                <img className="res-logo" alt="no image"
                src = 
                {CON_URL+resdata.info.cloudinaryImageId
   }
               />
               
            <h3>{resdata.info.name}</h3>
            <h5>{resdata.info.cuisines.join(", ")}</h5>
            <h5>{resdata.info.rating}</h5>
            <h5>{resdata.info.costForTwo}</h5>
            <h5> {resdata.info.avgRating} stars</h5>
            <h5>{resdata.info.sla.deliveryTime} minutes</h5>
           
        </div>
    )
    }

    export default RestaurantCard;