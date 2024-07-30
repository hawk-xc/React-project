export default function Pagination({page, setPage}) {
    function handlePageControl(e) {
        if (e.currentTarget.id === 'prev' && page > 1) {
            setPage(page - 1);
        } else if (e.currentTarget.id === 'next') {
            setPage(page + 1);
        }
    }

    return (
        <div className="join">
            <button id="prev" onClick={(e) => handlePageControl(e)} className="join-item btn"><i className="ri-expand-left-fill"></i></button>
            <button className="join-item btn">Page {page}</button>
            <button id="next" onClick={(e) => handlePageControl(e)} className="join-item btn"><i className="ri-expand-right-fill"></i></button>
        </div>
    );
}