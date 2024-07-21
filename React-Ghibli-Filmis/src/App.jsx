import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

export default function App() {
  const [anime, setAnime] = useState([]);
  const [modal, setModal] = useState(0);

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films')
      .then(response => response.json())
      .then(data => setAnime(data));
  }, []);

  return (
    <>
      <Navbar>
        <Title />
        <Menu />
      </Navbar>
      <Body>
        <FilmList anime={anime} modal={modal} setModal={setModal}>
          {/* Note: `Cards` is still used here */}
          {modal ? <Modal /> : null}
        </FilmList>
      </Body>
    </>
  );
}

function Navbar({ children }) {
  return (
    <div className="w-screen p-5 text-white bg-slate-800 flex justify-between items-center">
      {children}
    </div>
  );
}

function Title() {
  return (
    <div className="flex flex-row justify-center align-middle items-center gap-2">
      <img src={reactLogo} className="w-7" alt="logo" />
      <span className="font-bold">React Ghibli spot</span>
    </div>
  );
}

function Menu() {
  return <span>hamburger menu</span>;
}

function Body({ children }) {
  return <div className="container p-10">{children}</div>;
}

function FilmList({ anime, modal, setModal, children }) {
  return (
    <div className="card">
      <span>Daftar Film {modal}</span>
      <ul className="flex flex-wrap justify-center">
        {anime.map((data, index) => (
          <li key={index} className="w-2/12 m-3">
            <Cards
              sampul={data.image}
              judul={data.title}
              rilis={data.release_date}
              produser={data.producer}
              setModal={setModal}
              modal={modal} // Passing modal is optional here
            />
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}

function Cards({ sampul, judul, rilis, produser, setModal, modal }) {
  return (
    <div className="">
      <div className="rounded-lg bg-white shadow-lg">
        <img src={sampul} alt="movie poster" className="rounded-t-lg" />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-semibold">{judul}</h2>
          <p className="mb-2 text-sm text-gray-700">Release year: {rilis}</p>
          <p className="mb-4 text-sm text-gray-700">Director: {produser}</p>
          <button className="block w-full rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600" type="button">
            Lihat Detail
          </button>
          <button onClick={() => setModal(modal + 1)}>Tambah</button>
        </div>
      </div>
    </div>
  );
}

function Modal() {
  return <span>Modal saja</span>;
}
