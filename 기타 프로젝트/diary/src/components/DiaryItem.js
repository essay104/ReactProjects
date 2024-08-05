import React from "react";
import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryItem = ({ data }) => {
  const navigate = useNavigate();
  const [showDate, setShowDate] = useState(false);

  const goDetail = () => {
    navigate(`/diary/${data.id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${data.id}`);
  };

  const handleMouseOver = () => {
    setShowDate(true);
  };

  const handleMouseOut = () => {
    setShowDate(false);
  };

  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <div
      onClick={goDetail}
      className="diary-img"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={data.imgUrl} alt={data.id} />
      {showDate && (
        <div className="diary-date">
          {data.date}
        </div>
      )}
    </div>
  );
};

export default DiaryItem;
