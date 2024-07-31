import { useState, memo } from 'react';

const Card = memo((props) => {
    const [isLoading, setIsLoading] = useState(true);
    let poster_path = `https://image.tmdb.org/t/p/w500${props.poster_path}`;

    return (
        <div className="card md:w-80 max-sm:w-20 bg-base-100 shadow-xl hover:shadow-2xl duration-150 transition-all cursor-pointer" key={props.key} onClick={() => props.openModal(props.data.id)}>
            <figure>
                <img src={poster_path} alt={`image of ${props.original_title}`} onLoad={() => setIsLoading(false)} className="hover:scale-105 duration-150 transition-all" />
                {isLoading && <Skeleton />}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.original_title}</h2>
                <p className='max-sm:text-[10px]'>{props.overview}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" ><i className="ri-heart-add-line"></i> Favorite</button>
                </div>
            </div>
        </div>
    );
})

function Skeleton() {
    return (
        <div className="flex w-72 flex-col gap-4">
            <div className="skeleton h-80 w-full"></div>
        </div>
    );
}

export default Card;