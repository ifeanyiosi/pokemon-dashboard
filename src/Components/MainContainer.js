import React, { useEffect, useState } from "react";
import "./MainContainer.css";
import CardMain from "./CardMain";
import dybala from '../img/dybala.jpg'
import haaland from '../img/haaland.jpg'
import mbappe from '../img/mbappe.jpg'
import messi from '../img/messi.jpg'
import pogba from '../img/pogba.jpg'
import cr7 from '../img/ronaldo.jpg'
import MainRightTopCard from "./MainRightTopCard";
import MainRightBottomCard from "./MainRightBottomCard";



function MainContainer() {

  // fetch method was used to call the users from the API

  const [users, fetchUsers] = useState([]);

 const getData = () => {
        fetch('https://62823e3c9fac04c65411c0b5.mockapi.io/users')
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            fetchUsers(res)
        })
    }

   
     useEffect(() =>{
        getData()
    }, [])
  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
          style={{
            // background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
           {/* current number of users were called. using .length */}
          <div className="textContainer">
            <h1 className="textTitle">New Users</h1>
            <h2>{users.length}</h2>
            
            
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="#" className="button2">
                Popular
              </a>
            </div>
            <div className="filter_buttons">
              <a href="#" className="button">
                All
              </a>
              <a href="#" className="button2">
               Serie A
              </a>
              <a href="#" className="button2">
                La Liga
              </a>
              <a href="#" className="button2">
                English PL
              </a>
            </div>
          </div>

          <main>
            <CardMain imgSrc={cr7} title={"Cristiano Ronaldo"} hearts={"65"} />
            <CardMain imgSrc={messi} title={"Lionel Messi"} hearts={"65"} />
            <CardMain imgSrc={pogba} title={"Paul Pogba"} hearts={"65"} />
            <CardMain imgSrc={dybala} title={"Pauolo Dybala"} hearts={"65"} />
            <CardMain imgSrc={mbappe} title={"Kyllian Mbappe"} hearts={"65"} />
            <CardMain imgSrc={haaland} title={"Erling Haaland"} hearts={"65"} />
          </main>
        </div>
      </div>
      <div className="right">
        <MainRightTopCard />
        <MainRightBottomCard />
      </div>
    </div>
  );
}

export default MainContainer;
