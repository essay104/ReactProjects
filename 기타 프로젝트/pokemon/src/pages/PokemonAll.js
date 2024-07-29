import React, { useEffect, useState } from 'react';
import "./PokemonAll.css"
import PokemonCard from '../components/PokemonCard'
import { useDispatch, useSelector } from 'react-redux'
import { pokemonAction } from '../redux/actions/pokemonAction'
import PagenationCustom from "../components/PagenationCustom"

const PokemonAll = () => {
  const dispatch = useDispatch();
  const { data: pokemonList, loading } = useSelector((state) => state.pokemon)
  const [filter, setFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(0)
  const pokemonPerPage = 36

  useEffect(() => {
    dispatch(pokemonAction.getPokemon());
  }, [dispatch]);

  const handleFilterChange = (type) => {
    setFilter(type)
    setCurrentPage(0)
  }

  const filteredPokemonList = filter === 'all'
    ? pokemonList
    : pokemonList.filter((pokemon) =>
        pokemon.type.includes(filter)
      );

  const offset = currentPage * pokemonPerPage
  const currentPageData = filteredPokemonList.slice(offset, offset+pokemonPerPage)
  const perCount = Math.ceil(filteredPokemonList.length/pokemonPerPage)

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  console.log(pokemonList)

  const typeList = [
    "노말", "격투", "비행", "독", "땅", "바위", "벌레", "고스트", 
    "강철", "불꽃", "물", "풀", "전기", "에스퍼", "얼음", "드래곤", 
    "악", "페어리"
  ];

  return (
    <section className='pokemonAll'>
      <div className='type-nav'>
        {typeList.map((type)=>(
          <div className='type' key={type} onClick={()=> handleFilterChange(type)}>{type}</div>
        ))}
        <div className='type all-type' onClick={()=> handleFilterChange("all")}>All</div>
      </div>
      <div className='result-container'>
        <PokemonCard pokemonList={currentPageData} loading={loading} />
      </div>
      <PagenationCustom
        pageCount={perCount}
        onPageChange={handlePageClick}
        currentPage={currentPage}
      />
    </section>
  )
}

export default PokemonAll