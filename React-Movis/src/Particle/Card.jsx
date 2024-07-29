export default function Card(props) {
    let poster_path = `https://image.tmdb.org/t/p/w500${props.poster_path}`;

    return (
        <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl duration-150 transition-all" key={props.key}>
            <figure><img src={poster_path} alt={`image of ${props.original_title}`} className="hover:scale-105 duration-150 transition-all" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.original_title}</h2>
                <p>{props.overview}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Detail</button>
                </div>
            </div>
        </div>
    );
}