import React from 'react'
import NewsList from './NewsList'
import { useState, useContext, useEffect } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import { DiaryStateContext } from '../context/context'

const Home = () => {
  const mockData = [
    {id: 1,
      title: "아니 어떻게 이런 일이, 기아 타이거즈 충격의 30실점, KBO 역대 최다실점(종합)",
      imgUrl:"https://cdn.namdonews.com/news/photo/202408/782624_452598_3121.jpg",
      content: "단독 선두인 KIA 타이거즈가 두산 베어스에 역대 KBO리그 최다 득점 신기록을 헌납하며 대패했다. 두산은 31일 광주 기아챔피언스필드에서 열린 2024 신한 SOL 뱅크 KBO리그 KIA와 방문경기에서 홈런 네 방을 포함해 장단 28안타와 사사구 14개를 뽑아 무려 30-6으로 대승을 거뒀다",
      date: "2024-07-31",},
    {id: 2,
      title: "경제 6단체, 국회서 ‘노동조합법 개정 반대’ 결의 대회", 
      imgUrl:"https://imgnews.pstatic.net/image/032/2024/08/01/0003312366_001_20240801154309590.jpg?type=w647",
      content: "경제계가 노란봉투법(노동조합 및 노동관계조정법 2·3조 개정안)을 강행 처리하려는 야당을 규탄하며, 입법 추진 중단을 촉구했다.한국경영자총협회(경총)와 대한상공회의소, 한국경제인협회, 한국무역협회, 중소기업중앙회, 한국중견기업연합회 등 경제 6단체와 업종별 단체는 국민의힘 김형동 의원과 1일 국회 본관 앞 계단에서 ‘노란봉투법 반대’ 경제계 결의 대회를 열었다. 업종별 단체는 한국자동차모빌리티산업협회, 한국조선해양플랜트협회, 대한건설협회, 한국철강협회, 대한석유협회, 한국기계산업진흥회, 한국섬유산업연합회 등이 참여했다.",
      date: "2024-07-31",},
    {id: 3, 
      title: "해리스 급부상에 더 거칠어진 트럼프 입…", 
      imgUrl:"https://imgnews.pstatic.net/image/018/2024/08/01/0005802562_001_20240801155909578.jpg?type=w647",
      content: "미국 공화당 대통령 후보인 도널드 트럼프 전 대통령이 민주당의 대선 후보로 사실상 확정된 카멀라 해리스 부통령을 향해 ‘흑인’이 맞는지 의문스럽다며 인종 의혹을 제기해 논란이다. 조 바이든 대통령의 사퇴 이후 미 대선 정국에서 해리스 부통령이 급부상하자 공화당 부통령 후보인 J.D. 밴스 상원의원의 ‘자식 없는 여자’라고 발언한 인신공격에 이어 인종차별 공격까지 잇따라 이어지는 모양새다.",
      date: "2024-07-31",},
  ]

  const data = useContext(DiaryStateContext)
  const [todos, setTodos] = useState(mockData)
  const [pivotDate, setPivotDate] = useState(new Date())
  const [filteredData, setFilteredData] = useState([])

  console.log(data)

  const onIncreaseDate = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1))
  }

  const onDecreaseDate = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1,
    ))
  }

  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1
  }월`

  const combinedData = [...mockData, ...data]

  return (
    <div>
        <Header
        title={headerTitle}
        leftChild={<Button text="Prev" onClick={onDecreaseDate}/>}
        rightChild={<Button text="Next" onClick={onIncreaseDate}/>}
        />
      <NewsList data={combinedData}/>
    </div>
  )
}

export default Home