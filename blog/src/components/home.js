import '../css/home.css';
import Landing from './landing';
import PreviewPosts from './previewPosts';
import PreviewPictures from './previewPictures';

function Home() {

    return(
        <>
            <Landing />
            <PreviewPosts />
            <PreviewPictures />
        </>
    )
}

export default Home;