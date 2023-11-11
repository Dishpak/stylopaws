const BootstrapPagination = ({
    handleMoveToPage,
    handleMoveForward,
    handleMoveBack,
    pagesNumbers,
    currentPage,
}) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= pagesNumbers; i++) {
            pageNumbers.push(
                <li className="page-item" key={i}>
                    <button
                        className={`page-link ${
                            currentPage === i ? 'active' : ''
                        }`}
                        onClick={() => handleMoveToPage(i)}
                    >
                        {i}
                    </button>
                </li>,
            );
        }
        return pageNumbers;
    };

    return (
        pagesNumbers > 1 && (
            <nav aria-label="Page navigation" className="my-3">
                <ul className="pagination">
                    <li className="page-item">
                        <button
                            className="page-link"
                            aria-disabled="true"
                            onClick={handleMoveBack}
                        >
                            Previous
                        </button>
                    </li>
                    {renderPageNumbers()}
                    <li className="page-item">
                        <button
                            className="page-link"
                            onClick={handleMoveForward}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        )
    );
};

export default BootstrapPagination;
