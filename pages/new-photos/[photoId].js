const NewPhotoPage = ({photo}) => {
    return <div className="wrapper">
        <p>
            <strong>id: </strong> <span>{photo.id}</span>
        </p>
        <p>
            <strong>Album Id: </strong> <span>{photo.albumId}</span>
        </p>
        <p>
            <strong>Title: </strong> <span>{photo.title}</span>
        </p>
        <p>
            <strong>Url: </strong> <span>{photo.url}</span>
        </p>
        <p>
            <strong>Thumbnail Url: </strong> <span>{photo.thumbnailUrl}</span>
        </p>
        <div>
            <p>
                Thumbnail:
            </p>
            <img src={photo.thumbnailUrl} />
        </div>

        <div>
            <p>
                Photo:
            </p>
            <img src={photo.url} />
        </div>
    </div>
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    "photoId": "201"
                }
            },
            {
                params: {
                    "photoId": "202"
                }
            },
            {
                params: {
                    "photoId": "203"
                }
            },
        ],
        fallback:  "blocking"// Always better than fallback: true for SEO purposes!!!!!!!!
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    // const response = await fetch(`http://127.0.0.1:4000/new-photos/${params.photoId}`);
    // const response = await fetch(`http://localhost:4000/new-photos/${params.photoId}`);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.photoId}`);
    const photo = await response.json();

    if (Object.keys(photo).length === 0){
        return {
            notFound: true
        }
    }
    
    return {
        props: {
            photo
        },
        revalidate: 10
    }
}

export default NewPhotoPage;