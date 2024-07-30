export default function apis_remote(props) {
    const api_key = 'a4a9a94c515056aae944dd7d863ef409';

    fetch(`https://api.themoviedb.org/${props.url}?page=${props.page}&api_key=${api_key}`)
        .then(api => api.json())
        .then((api) => {
            props.setApisData(api.results);
            props.setIsLoading(false);
        })
        .catch((error) => { 
            console.error('Error fetching data:', error);
            props.setIsLoading(false);
        });
}