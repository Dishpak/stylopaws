
const Pagination = ({
                      handleMoveToPage,
                      handleMoveForward,
                      handleMoveBack,
                      pagesNumbers,
                      currentPage,
                    }) => {

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= pagesNumbers; i++) {
      pageNumbers.push(<li
        className="page-item"
        key={i}>
        <a className={`page-link ${currentPage === i ? 'active' : ''}`} href="#" onClick={() => handleMoveToPage(i)}>{i}</a></li>)
    }
    return pageNumbers;
  }


  return (
    pagesNumbers > 1 &&
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#" aria-disabled="true" onClick={handleMoveBack}>Previous</a></li>
        {renderPageNumbers()}
        <li className="page-item"><a className="page-link" href="#" onClick={handleMoveForward}>Next</a></li>
      </ul>
    </nav>
  )
};

export default Pagination;
