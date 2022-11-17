import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2014/09/21/1525/DELRG-P022-Exterior-Facade.jpg/DELRG-P022-Exterior-Facade.16x9.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Hyatt Regency Gurugram Hotel</h1>
        <span className="siDistance">Indira Gandhi International Airport(DEL): 21.94 Km</span>
        <span className="siTaxiOp">Airport Pickup Available</span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹ 9,900</span>
          <span className="siTaxOp">Taxes Extra</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
