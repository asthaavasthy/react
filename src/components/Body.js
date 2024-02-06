import RestaurantCard from "./RestaurantCard"
import Shimmer from "./shimmer";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
const Body = () =>
{
    let [resArray,setListOfRestaurant] = useState([]);
    const [filterrestaurant,setfilteredrestaurant] = useState([]);
    const[searchText,setSearchText] = useState("");
    useEffect(()=>{
      fectchData();
    },[]);
    const fectchData = async () =>
    {
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.686409&lng=76.70115&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
const json = await data.json();

//optional chaining
setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setfilteredrestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
   
    return resArray.length === 0 ?  <Shimmer /> :
    (
    <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText}
                onChange={(e)=>
                {
setSearchText(e.target.value);
                }}/>
                <button onClick={
                    ()=>
                    {
                      const filteredres = resArray.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText)
                      ); 
                      setfilteredrestaurant(filteredres);
                    }

                }
                >search</button>
            </div>
            <button className="filter-btn" onClick={
                ()=>{
                   
                    filteredList = resArray.filter((res) => res.info.avgRating > 4.4);
                   
                    setListOfRestaurant(filteredList);
                   
                    console.log(resArray);
                }
            }>
                Top Rated Restaurant
            </button>
        </div>
        <div className="res-container">
           {
            filterrestaurant.map((restaurant) =>
            (
              <Link to={"/restaurants/"+restaurant.info.id}><RestaurantCard key={restaurant.info.id} resdata = {restaurant} /></Link>  
            ))
           }


        </div>
    </div>
    )
        }

export default Body;