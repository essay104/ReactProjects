import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";
import "./Editor.css";
import { useNavigate } from "react-router-dom";
import { getFormattedDate } from "../util";

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();

  const initDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    return `${year}-${month}-${day}`;
  };

  const [state, setState] = useState({
    date: initDate(new Date()),
    img: "",
    title: "",
    text: "",
  });

  useEffect(() => {
    if (initData) {
      setState({
        ...initDate,
        date: getFormattedDate(new Date(initDate.date)),
      });
    }
  }, [initData]);

  const { date, img, title, text } = state;

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleTitleUpload = (e) => {
    setState({
      ...state,
      title: e.target.value,
    });
  };

  const handleImgUpload = (e) => {
    setState({
      ...state,
      img: e.target.value,
    });
  };

  const handleChangeContent = (e) => {
    setState({
      ...state,
      text: e.target.value,
    });
  };

  const handleSubmit = () => {
    text.trim() === "" ? alert("내용을 입력해주세요!") : onSubmit(state);
  };

  const handleOnGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="Editor">
      <div className="editor_section date_section">
        <h3>오늘의 날짜</h3>
        <div className="input_wrapper">
          <input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </div>
      <div className="editor_section">
        <h3>제목 입력</h3>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={state.title}
          onChange={handleTitleUpload}
        />
      </div>
      <div className="editor_section">
        <h3>이미지</h3>
        <input
          type="text"
          placeholder="이미지 주소 URL을 입력해주세요"
          value={state.img}
          onChange={handleImgUpload}
        />
        <div className="input_wrapper"></div>
      </div>
      <div className="editor_section">
        <h3>본문을 입력하세요</h3>
        <div className="input_wrapper">
          <textarea
            placeholder="내용을 입력해주세요"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>
      <div className="editor_section bottom_section">
        <Button text="취소하기" onClick={handleOnGoBack} />
        <Button text="작성완료" type="positive" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Editor;
