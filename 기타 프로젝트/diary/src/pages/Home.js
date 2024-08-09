import { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";
import Button from "../components/Button";
import { DiaryStateContext } from "../App";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  } 월`;

  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text="Prev" onClick={onDecreaseMonth} />}
        rightChild={<Button text="Next" onClick={onIncreaseMonth} />}
      />
      <DiaryList data={data} />
    </div>
  );
};

export default Home;
