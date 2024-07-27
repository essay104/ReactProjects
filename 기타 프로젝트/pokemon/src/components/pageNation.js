import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/actions/pokemonAction';

const Pagination = () => {
  const dispatch = useDispatch();
  const { page, pageSize, data } = useSelector((state) => state.pokemon);
  const totalPages = Math.ceil(data.length / pageSize);

  const [currentRange, setCurrentRange] = useState(0);
  const pagesPerRange = 5; // 한 번에 보여줄 페이지 수

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  const handlePrevRange = () => {
    setCurrentRange(Math.max(0, currentRange - pagesPerRange));
  };

  const handleNextRange = () => {
    setCurrentRange(Math.min(totalPages - pagesPerRange, currentRange + pagesPerRange));
  };

  const currentPages = pageNumbers.slice(currentRange, currentRange + pagesPerRange);

  return (
    <div className="pagination">
      {currentRange > 0 && <button onClick={handlePrevRange}>이전</button>}
      {currentPages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={page === pageNumber ? 'active' : ''}
        >
          {pageNumber}
        </button>
      ))}
      {currentRange + pagesPerRange < totalPages && <button onClick={handleNextRange}>다음</button>}
    </div>
  );
};

export default Pagination;