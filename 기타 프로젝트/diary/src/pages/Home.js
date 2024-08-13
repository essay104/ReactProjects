import { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";
import Button from "../components/Button";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate, setPageTitle } from "../util";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setPageTitle("Main page");
  });

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
      console.log(filteredData);
    } else {
      setFilteredData([]);
    }
  }, [pivotDate, data]);

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
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home;
