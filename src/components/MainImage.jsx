export default function MainImage({ data }) {
    return (
        <>
            <div className="main-image-container">
                <img src={data?.hdurl} alt={data?.title || 'background image'} />
            </div>
        </>
    )
}