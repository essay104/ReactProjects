import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DiaryDispatchContext} from "../App";
import { setPageTitle } from "../util";

const New = () => {
  useEffect(() => {
    setPageTitle("새 일기 쓰기");
  }, []);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { onCreate } = useContext(DiaryDispatchContext);

  const onSubmit = (data) => {
    const { title, img, text, date } = data;
    onCreate(title, img, text, date);
    navigate("/");
  };

  return (
    <div>
      <Header
        leftChild={<Button text="뒤로가기" onClick={goBack} />}
        title="새 일기 쓰기"
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
