export default function Navbar({ setTheme }) {
    const theme = ['light', 'dark', 'dim', 'cupcake'];

    return (
        <div id="navbar" className="container w-full h-16 px-5 m-5  flex justify-between items-center flex-row">
            <span className="text-2xl font-extrabold">
            ⚛️ React Movis
            </span>
            <span>
                <div className="flex flex-row gap-3">
                    <span>
                      <select className="select select-accent w-full max-w-xs" defaultValue="light" onChange={(e) => setTheme(e.target.value)}>
                        {
                            theme.map((t, i) => <option key={i} value={t}>{t}</option>)
                        }
                      </select>
                    </span>

                    <span>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Cari..." />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="h-4 w-4 opacity-70">
                              <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                            </svg>
                        </label>
                    </span>
                </div>
            </span>
        </div>
    );
}