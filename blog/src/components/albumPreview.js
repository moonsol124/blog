import '../css/pictures.css';

function AlbumPreview(props) {
    return (
        <img src={props.picture.address} alt={props.picture.title} className="album-preview-img"/>
    )
}

export default AlbumPreview;