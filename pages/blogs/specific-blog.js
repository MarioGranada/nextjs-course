import { useRouter } from "next/router";

const SpecificBlog = () => {
    const router = useRouter();
    const params = router.query;
    return <>
    <p>
    this is my specific blog. This page Prevails over the '[...params].js' page since it has an specific path.
    </p> 
    <p>This is the route param for this path: {params[0]}</p>
    </>
}

export default SpecificBlog;