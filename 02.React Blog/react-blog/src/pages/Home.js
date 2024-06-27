import { useState, useContext, useEffect } from "react";
import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import { DiaryStateContext } from '../App'
import { getMonthRangeByDate, setPageTitle } from "../util";

const Home = () => {
  const data = useContext(DiaryStateContext)
  const [pivotDate, setPivotDate] = useState(new Date());

  useEffect(() => {
    setPageTitle("감정일기장 메인페이지");
  }, []);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  }

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  }

  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1
    }월`;

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

export default Home