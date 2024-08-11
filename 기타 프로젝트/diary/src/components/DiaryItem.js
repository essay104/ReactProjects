import React from "react";
import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getFormattedDate } from "../util";

const DiaryItem = ({ id, title, img, text, date }) => {
  const navigate = useNavigate();
  const [showDate, setShowDate] = useState(false);

  const goDetail = () => {
    navigate(`/diary/${id}`)
}

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleMouseOver = () => {
    setShowDate(true);
  };

  const handleMouseOut = () => {
    setShowDate(false);
  };

  const formattedDate = getFormattedDate(new Date(date));

  return (
    <div
      onClick={goDetail}
      className="diary-img"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={img} alt={id} />
      {showDate && <div className="diary-date">{formattedDate}</div>}
    </div>
  );
};

export default DiaryItem;
