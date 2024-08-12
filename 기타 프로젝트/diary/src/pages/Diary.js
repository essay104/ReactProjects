import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { getFormattedDate } from "../util";
import useDiary from "../hook/useDiary";

const Diary = ({ id, isOpen, onClose }) => {
  const data = useDiary(id);

  const navigate = useNavigate();
  // const goBack = () => {
  //   navigate(-1);
  // };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  console.log(data);

  if (!data) {
    return <div>데이터를 불러오고 있습니다...</div>;
  } else {
    const { date, img, title, text } = data;
    const subject = `${getFormattedDate(new Date(Number(date)))}`;

    return (
      <div className="diary-wrapper">
        <h2>{subject}</h2>
        <Viewer img={img} text={text} title={title} />
        <div className="buttons">
          <Button onClick={goEdit} text="수정" />
          <Button onClick={onClose} text="닫기">
            뒤로가기
          </Button>
        </div>
      </div>
    );
  }
};

export default Diary;
