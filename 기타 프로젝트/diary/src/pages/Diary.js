import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { getFormattedDate } from "../util";
import useDiary from "../hook/useDiary";

const Diary = () => {
  const { id } = useParams;
  const data = useDiary(id);

  const navigate = useNavigate;
  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (!data) {
    return <div>데이터를 불러오고 있습니다...</div>;
  } else {
    const { date, img, title, text } = data;
    const subject = `${getFormattedDate(new Date(Number(date)))}`;
    return (
      <div>
        <Header
          leftChild={
            <Button
              onClick={goBack}
              text="< 뒤로가기"
              title={subject}
              rightChild={<Button onClick={goEdit} text="수정하기" />}
            />
          }
        />
        <Viewer img={img} text={text} title={title} />
      </div>
    );
  }
};

export default Diary;
