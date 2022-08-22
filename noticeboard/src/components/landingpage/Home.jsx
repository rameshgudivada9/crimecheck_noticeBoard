import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosterData, postPosterData } from "../../redux/homePage/actions";
import { dateFormat } from "../../utils/extrafunctions";
import { getItemFromLocal } from "../../utils/localStorage";
import "./home.css";

export const Home = () => {
  let posterData = useSelector((store) => store.homePageReducer.posterData);
  let temp = [];
  for (var i = posterData.length - 1; i >= 0; i--) {
    let dt = dateFormat(posterData[i].createdAt);
    let bag = { ...posterData[i], date: dt.date, time: dt.time };

    temp.push(bag);
  }
  posterData = temp;
  console.log(posterData);

  const [input, setInput] = useState({
    userId: getItemFromLocal("token"),
    poster: "",
  });
  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(postPosterData(input));
  };
  // console.log(input)
  useEffect(() => {
    dispatch(getPosterData());
  }, []);
  return (
    <div className="homeborderdiv">
      <div>
        <h4 className="heading">Notice Board</h4>
      </div>
      <div className="noticediv">
        <p>Submit a notice:</p>
      </div>
      <div>
        {" "}
        <textarea
          className="textareainput"
          type="text"
          onChange={(e) => setInput({ ...input, poster: e.target.value })}
          value={input.poster}
        />
      </div>
      <div className="textbtndiv">
        <button className="textbtn" onClick={submitHandler}>
          submit
        </button>
      </div>
      <div className="maindiv-content">
        {posterData?.map((e, i) => {
          return (
            <div className="sub-1" key={i}>
              <div>
                {" "}
                <h5>{e.poster}</h5>
              </div>
              <div className="sub-2">
                <div>{e.userId.userName}</div>
                <div className="timestramp">
                  {e.date}
                  {e.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
