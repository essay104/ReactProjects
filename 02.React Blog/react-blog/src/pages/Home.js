import { useState, useContext, useEffect } from "react";
import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import { DiaryStateContext } from '../App'
import { getMonthRangeByDate, setPageTitle } from "../util";

const Home = () => {
  const data = useContext(DiaryStateContext)
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setPageTitle("감정일기장 메인페이지");
  }, []);

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [pivotDate, data]);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  }

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  }

  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1
    }월`;

  console.log(data)

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>
  } else {
    return (
      <div>
        <Header
          title={headerTitle}
          leftChild={<Button text="Prev" onClick={onDecreaseMonth} />}
          rightChild={<Button text="Next" onClick={onIncreaseMonth} />}
        />
        <DiaryList data={data} />
      </div>
    )
  }


}

export default Home