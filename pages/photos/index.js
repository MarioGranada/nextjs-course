const PhotosPage = ({photos}) => {
    return <>in here photos page {photos.length} </>;
}


export async function getStaticProps()  {
    // Node 18 has an isssue with 'localhost' on fetch requests
    // Which makes change localhost to 127.0.0.1 
    // const response = await fetch('http://127.0.0.1:4000/photos');
    // const response = await fetch('http://localhost:4000/photos');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const photos =  await response.json();
return {
    props: {
        photos
    },
}
}

export default PhotosPage;