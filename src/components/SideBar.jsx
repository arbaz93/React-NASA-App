export default function SideBar({ handleToggleSideBar, data }) {
    return (
        <>
        <section className="sidebar">
            <div className="overlay" onClick={handleToggleSideBar}></div>
            <article className="description">
                <h3 className="title">{data?.title}</h3>
                <p className="date">{data?.date}</p>
                <p className="description-data">{data?.explanation}</p>
            <button className="btn-arrow" onClick={handleToggleSideBar}>
                <svg fill="#000000" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M16.707,18.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L15.293,6.707a1,1,0,0,1,1.414-1.414l6,6a1,1,0,0,1,0,1.414Z"/></svg>
            </button>
            </article>
        </section>
        </>
    )
}