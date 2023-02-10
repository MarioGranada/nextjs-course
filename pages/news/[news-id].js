import { useRouter } from "next/router";

const SingleNewsPage = () => {
    const router = useRouter();
    const params = router.query;
    
    console.log('in here oe params', params["news-id"]);
    return <>
    <p>
    this is my specific new.
    </p> 
    <p>This is the route param for this path: {params["news-id"]}</p>
    </>
}

export default SingleNewsPage;