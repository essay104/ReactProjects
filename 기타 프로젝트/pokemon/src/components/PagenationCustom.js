import React from 'react';
import ReactPaginate from 'react-paginate';
import "../components/PagenationCustom.css"

const PaginationCustom = ({ pageCount, onPageChange, currentPage }) => {

  const handlePageClick = (e) => {
    onPageChange(e)
    window.scrollTo({top:0})
  }

  return (
    <ReactPaginate
      previousLabel="이전"
      nextLabel="다음"
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      pageLinkClassName={"pagination__link"}
      activeLinkClassName={"pagination__link--active"}
      previousLinkClassName={"pagination__link--prev"}
      nextLinkClassName={"pagination__link--next"}
      disabledClassName={"pagination__link--disabled"}
      breakLabel={null}
      initialPage={currentPage}
      pageRangeDisplayed={5}
      marginPagesDisplayed={0}
    />
  );
};

export default PaginationCustom;