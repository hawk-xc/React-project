import { useState, useEffect } from 'react';
import apis_remote from '../helper/apis_remote.jsx';

export default function Modal({ id, closeModal }) {  
    const [isLoading, setIsLoading] = useState(true);
    const [apis_data, setApisData] = useState(null);

    useEffect(() => {
        if (!id) return;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a4a9a94c515056aae944dd7d863ef409&page=1`)
        .then(api => api.json())
        .then((api) => {
            // console.log('Fetched API data:', api);
            setApisData(api);
            setIsLoading(false);
        })
        .catch((error) => { 
            console.error('Error fetching data:', error);
            setIsLoading(false);
        });
    }, [id]);

    if (!id) return null;

    console.log(apis_data.name);

    if (isLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded shadow-lg">
                    <p>Loading...</p>
                    <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
                </div>
            </div>
        );
    }

    if (!apis_data) return null;
    // return (
    //     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    //         <div className="bg-white p-8 rounded-xl shadow-lg md:w-8/12 max-sm:w-10/12">
    //             <div className="flex flex-row">
    //                 <div id="imagePath" className='md:w-[100rem]'>
    //                   <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={`image of ${data.original_title}`} />
    //                 </div>
    //                 <div id="detailPath" className='px-10'>
    //                     <ul className='flex flex-col gap-2'>
    //                       <li><h2 className="text-2xl mb-4 font-semibold">{data.title ? data.title : data.name}</h2></li>
    //                       <li><p>{data.overview}</p></li>
    //                       <li><span className='font-semibold'>Original Title</span><p>{data.original_title ? data.original_title : data.original_name}</p></li>
    //                       <li><span className='font-semibold'>Release year</span><p>{data.release_date ? data.release_date : data.first_air_date}</p></li>
    //                       <li><span className='font-semibold'>Media</span><p>{data.media_type}</p></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //             <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
    //         </div>
    //     </div>
    // );
}
