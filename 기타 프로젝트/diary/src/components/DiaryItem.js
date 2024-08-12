import React from "react";
import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getFormattedDate } from "../util";
import Modal from "./Modal";
import Diary from "../pages/Diary";

const DiaryItem = ({ id, title, img, text, date }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formattedDate = getFormattedDate(new Date(date));

  return (
    <>
      <div>
        <div className="diary-img" onClick={() => setIsModalOpen(true)}>
          <img src={img} alt={id} />
        </div>
        <div className="diary-title">
          <span>{title}</span>
          <span className="diary-date">{formattedDate}</span>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Diary id={id} onClose={closeModal} />
      </Modal>
    </>
  );
};

export default DiaryItem;
