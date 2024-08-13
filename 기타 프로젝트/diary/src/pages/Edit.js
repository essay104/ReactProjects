import React, { useContext, useEffect } from "react";
import { setPageTitle } from "../util";
import { DiaryDispatchContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hook/useDiary";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const onClickDelete = () => {
    if (window.confirm("삭제할까요? 다시 복구되지 않습니다")) {
      onDelete(id);
      navigate("/", { replace: true });
    }
  };

  const onSubmit = (data) => {
    if (window.confirm("수정하시겠습니까?")) {
      const { date, img, title, text } = data;
      onUpdate(id, title, img, text, date);
      navigate("/", { replace: true });
    }
  };

  if (!data) {
    return <div>데이터를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          leftChild={<Button text="< 뒤로가기" onClick={goBack} />}
          title="수정하기"
          rightChild={
            <Button type="negative" text="삭제하기" onClick={onClickDelete} />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;
