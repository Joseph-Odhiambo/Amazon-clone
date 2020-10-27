import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      {/* https://ucarecdn.com/a55e2960-2f91-48f9-b418-4185725489c2/-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/ */}
      {/* https://ucarecdn.com/e7c19fc3-c52f-4a8a-b8f2-0219ddb105df/-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/ */}
      {/* https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg */}
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      <div className="home_row">
        <Product
          id={1}
          title="Safari Boots"
          price={3500.0}
          rating={5}
          image="http://uniformdistributorsltd.com/wp-content/uploads/2014/08/safari-boots.png"
        />{" "}
        <Product
          id={1}
          title="Super Bike"
          price={135000.0}
          rating={4}
          image="https://www.motorcyclespecs.co.za/Gallery_A-L_16/damon-hypersport-01.jpg"
        />
        <Product
          id={1}
          title="Nokia Kaduda"
          price={1300.0}
          rating={5}
          image="https://images.ctfassets.net/wcfotm6rrl7u/1nQnAFS1oEUSU0aUiUCQWS/68c66c156cf258a5a8b7756f48f600c8/Nokia_130-Hero.png?fm=png"
        />
      </div>
      <div className="home_row">
        <Product
          id={1}
          title="Infinix Note-9"
          price={37000.0}
          rating={5}
          image="https://www.phoneplacekenya.com/wp-content/uploads/2019/10/Infinix-Hot-8-Lite.png"
        />{" "}
        <Product
          id={1}
          title="Hisense 50'"
          price={35000.0}
          rating={5}
          image="https://le.co.ke/wp-content/uploads/2020/08/Hisense-50-Inch-4K-Android-Smart-Tv-50B7KEN.jpg"
        />
        <Product
          id={1}
          title="Ramtoms water-dispenser"
          price={3500.0}
          rating={5}
          image="https://www.ramtons.com/media/catalog/product/r/m/rm-576.jpg"
        />
        <Product
          id={1}
          title="Electric water kettles"
          price={1499.0}
          rating={5}
          image="https://www.globalguds.com/wp-content/uploads/2017/07/btscarltsilver.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id={1}
          title="Armco Microwave"
          price={1799.0}
          rating={5}
          image="https://copia.co.ke/wp-content/uploads/Armco-Microwave-AM-DG2043SL-Digital-Oven-Grill-Silver-Black_Microwaves_1033_1.png"
        />
      </div>
    </div>
  );
}

export default Home;
