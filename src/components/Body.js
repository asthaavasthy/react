import RestaurantCard from "./RestaurantCard"
import resArray from "../Utils/MockData";
import {useState} from "react";
const Body = () =>
{
    let [resArray,setListOfRestaurant] = useState([
        {
            "info": {
              "id": "41350",
              "name": "Burger King",
              "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
              "locality": "Sector 35",
              "areaName": "Sector 35",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4.3,
              "parentId": "166",
              "avgRatingString": "4.3",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 7.2,
                "serviceability": "SERVICEABLE",
                "slaString": "36 mins",
                "lastMileTravelString": "7.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-01-02 04:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹129"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/burger-king-sector-35-chandigarh-41350",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "210903",
              "name": "Sweet Truth - Cake and Desserts",
              "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
              "locality": "Mohali",
              "areaName": "Sector 59",
              "costForTwo": "₹450 for two",
              "cuisines": [
                "Snacks",
                "Bakery",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.6,
              "parentId": "4444",
              "avgRatingString": "4.6",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-01-01 23:59:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-mohali-sector-59-chandigarh-210903",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "72299",
              "name": "Subway",
              "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
              "areaName": "Sector 46",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Healthy Food",
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "2",
              "avgRatingString": "4.3",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 58,
                "lastMileTravel": 8.3,
                "serviceability": "SERVICEABLE",
                "slaString": "58 mins",
                "lastMileTravelString": "8.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-01-02 02:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/subway-sector-46-chandigarh-72299",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "64365",
              "name": "Katani Dhaba",
              "cloudinaryImageId": "wkyhgrafwsszhjmxxzsd",
              "locality": "Phase 3",
              "areaName": "Phase 3",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Punjabi",
                "Indian",
                "Street Food",
                "Snacks",
                "Beverages",
                "Sweets",
                "Chinese",
                "Thalis"
              ],
              "avgRating": 4.4,
              "parentId": "4680",
              "avgRatingString": "4.4",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 4.6,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "4.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-01-02 02:30:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹50 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/katani-dhaba-phase-3-chandigarh-64365",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "50247",
              "name": "Gopal's",
              "cloudinaryImageId": "dssfbzbajpjg6zms4vpa",
              "locality": "Sector 125",
              "areaName": "Sunny Enclave Kharar",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Sweets",
                "Beverages",
                "Thalis"
              ],
              "avgRating": 4.3,
              "parentId": "4539",
              "avgRatingString": "4.3",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 7.7,
                "serviceability": "SERVICEABLE",
                "slaString": "38 mins",
                "lastMileTravelString": "7.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-01-01 21:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/gopals-sector-125-sunny-enclave-kharar-chandigarh-50247",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "41176",
              "name": "Chaayos Chai+Snacks=Relax",
              "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
              "locality": "Elante Mall Chandigarh",
              "areaName": "Industrial Area Phase 1",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Bakery",
                "Beverages",
                "Chaat",
                "Desserts",
                "Home Food",
                "Italian",
                "Maharashtrian",
                "Snacks",
                "Street Food",
                "Sweets"
              ],
              "avgRating": 4.5,
              "parentId": "281782",
              "avgRatingString": "4.5",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 55,
                "lastMileTravel": 12.6,
                "serviceability": "SERVICEABLE",
                "slaString": "55 mins",
                "lastMileTravelString": "12.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-01-01 23:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹175 OFF",
                "subHeader": "ABOVE ₹799",
                "discountTag": "FLAT DEAL"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-elante-mall-industrial-area-phase-1-chandigarh-41176",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "537475",
              "name": "Uttam Sweets Bakery & Restaurant",
              "cloudinaryImageId": "bngudbgsxwdx6wimjzfw",
              "areaName": "Sector 44",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Sweets",
                "Bakery",
                "Chinese",
                "Desserts",
                "Punjabi",
                "Fast Food"
              ],
              "avgRating": 4.3,
              "veg": true,
              "parentId": "258627",
              "avgRatingString": "4.3",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 6.3,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "6.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-01-01 22:30:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "25% OFF",
                "subHeader": "UPTO ₹65"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/uttam-sweets-bakery-and-restaurant-sector-44-chandigarh-537475",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "46348",
              "name": "Burger Point 70",
              "cloudinaryImageId": "mqbffp1a8thnsq1pibk8",
              "locality": "Mohali",
              "areaName": "Sector 70",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "American",
                "Fast Food",
                "Pizzas",
                "Beverages"
              ],
              "avgRating": 4.1,
              "parentId": "391460",
              "avgRatingString": "4.1",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "2.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-01-01 23:59:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
              },
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/burger-point-70-mohali-sector-70-chandigarh-46348",
              "type": "WEBLINK"
            }
          }
    ]);
  return  (
    <div className="body">
        <div className="filter">
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
            resArray.map((restaurant) =>
            (
                <RestaurantCard key={restaurant.info.id} resdata = {restaurant} />
            ))
           }


        </div>
    </div>
    )
        }

export default Body;