import React, { useEffect, useState } from "react";

export default function Body({children}) {
    const [apis_data, setApisData] = useState([]);
    const api_key = 'a4a9a94c515056aae944dd7d863ef409';
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`)
        .then(api => api.json())
        .then((api) => {
            setApisData(api.results);
            setIsLoading(false);
        })
        .catch((error) => { 
            console.error('Error fetching data:', error);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <p>Loading...</p>
          </div>
        );
      }

    return (
        <div className="container p-10 flex flex-row flex-wrap justify-evenly gap-10">
            {apis_data.map((data, i) => (
                React.cloneElement(children(data), { 
                    key: data.id, 
                    original_title: data.original_title ?? data.name, 
                    poster_path: data.poster_path,
                    overview: data.overview
                })
            ))}
        </div>
    );
}