import React, { useEffect, useState } from "react";
import Modal from '../Particle/Modal';
import Pagination from '../Particle/Pagination';
import apis_remote from '../helper/apis_remote';

export default function Body({children}) {
    const [apis_data, setApisData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => apis_remote({
        url: '3/trending/all/day',
        page: page, 
        setApisData: setApisData, 
        setIsLoading: setIsLoading
    }), [page]);

    if (isLoading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <p>Loading...</p>
          </div>
        );
    }

    function setModal(data) {
        setSelectedId(data.id);
        setOpenModal(true);
    }

    function closeModal() {
        setOpenModal(false);
        setSelectedId(null);
    }

    return (
        <>
            <div id="containerHeader" className="flex flex-row w-full justify-between md:px-60 max-sm:px-5">
                <span className="text-3xl">Most Popular Movies!</span>
                <Pagination page={page} setPage={setPage} />
            </div>
            <div className="container md:p-10 max-sm:p-1 flex flex-row flex-wrap justify-evenly md:gap-10 max-sm:gap-1">
                {apis_data.map((data, i) => (
                    React.cloneElement(children(data), { 
                        key: data.id, 
                        original_title: data.original_title ?? data.name, 
                        poster_path: data.poster_path,
                        overview: data.overview,
                        openModal: () => setModal(data)
                    })
                ))}
                <Pagination page={page} setPage={setPage} />
            </div>
            {/* {openModal && <Modal data={selectedId} closeModal={closeModal} />} */}
            {openModal && <Modal id={selectedId} closeModal={closeModal} />}
        </>
    );
}