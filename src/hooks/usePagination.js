import { useState } from 'react';

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  const dataPerPage = () => {
    const beginingSlice = (currentPage - 1) * itemsPerPage;
    const endingSlice = beginingSlice + itemsPerPage;
    return data?.slice(beginingSlice, endingSlice);
  };

  const handleMoveForward = () => {
    setCurrentPage((prev) => Math.min(prev + 1, numberOfPages));
  };

  const handleMoveBack = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleMoveToPage = (page) => {
    const pageNumber = Math.max(page, 1);
    setCurrentPage(Math.min(pageNumber, numberOfPages));
  };

  return {
    currentPage,
    numberOfPages,
    dataPerPage,
    handleMoveForward,
    handleMoveBack,
    handleMoveToPage,
  };
};

export default usePagination;
