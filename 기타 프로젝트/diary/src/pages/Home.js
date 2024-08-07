import { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";
import Button from "../components/Button";
import { DiaryStateContext } from "../App";
import sampleImg1 from "../imgs/KakaoTalk_20240805_153542495.jpg";
import sampleImg2 from "../imgs/KakaoTalk_20240805_153542495_01.jpg";
import sampleImg3 from "../imgs/KakaoTalk_20240805_153542495_02.jpg";
import sampleImg4 from "../imgs/KakaoTalk_20240805_153542495_03.jpg";

const Home = () => {
  const sampleData = [
    {
      id: 1,
      title: "맛있는 한 끼",
      imgUrl: sampleImg3,
      text: "두 가지의 요리가 함께 제공되는 맛있는 한 끼. 소고기 덮밥과 함께 소고기 우동이 세트로 제공되며, 음료와 함께 피클과 김치도 곁들여져 있습니다. 든든한 식사로 하루를 시작하기에 좋습니다.",
      date: "2024-08-05",
    },
    {
      id: 2,
      title: "아파트 단지의 고양이",
      imgUrl: sampleImg4,
      text: "아파트 단지의 정원에서 발견한 귀여운 고양이. 고양이는 주변을 살피며 천천히 산책 중입니다. 푸른 잎사귀와 다양한 식물들 사이에서 고양이는 마치 자연 속의 일부인 듯한 느낌을 줍니다.",
      date: "2024-08-05",
    },
    {
      id: 3,
      title: "비오는 날의 거리",
      imgUrl: sampleImg1,
      text: "비가 내리는 날, 바쁜 도심의 거리 풍경. 자동차와 사람들이 오가는 가운데, 빗방울이 떨어지며 도로가 반짝입니다. 비오는 날의 차분한 분위기를 느낄 수 있는 장면입니다.",
      date: "2024-08-05",
    },
    {
      id: 4,
      title: "눈 내린 놀이터",
      imgUrl: sampleImg2,
      text: "겨울철, 눈이 소복이 쌓인 놀이터의 모습. 하얗게 변한 나무들과 눈 덮인 놀이터 기구들이 마치 동화 속 한 장면처럼 보입니다. 아이들은 아직 나오지 않았지만, 곧 눈싸움을 하며 즐거운 시간을 보낼 것만 같은 분위기입니다.",
      date: "2024-08-05",
    },
  ];

  const data = useContext(DiaryStateContext);
  const [item, setItem] = useState(sampleData);
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

  const combinedItem = [...sampleData, ...data];

  console.log(combinedItem);

  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text="Prev" onClick={onDecreaseMonth} />}
        rightChild={<Button text="Next" onClick={onIncreaseMonth} />}
      />
      <DiaryList data={combinedItem} />
    </div>
  );
};

export default Home;
