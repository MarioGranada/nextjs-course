import { useRouter } from "next/router";

const BlogsPage = ({test}) => {
    const router = useRouter();
    // This params holds all and both route params and query params
    // Query params are scattered without being wrapped in a single object property
    // Route come in an array 'params'
    // So the route http://localhost:3000/blogs/specific-route/cxvb/fghj/asdf/asdfe?testa=iuop&tesb=123&testc=true
    // Must lead to 
    // {
    //     "testa": "iuop",
    //     "tesb": "123",
    //     "testc": "true",
    //     "params": [
    //         "specific-route",
    //         "cxvb",
    //         "fghj",
    //         "asdf",
    //         "asdfe"
    //     ]
    // }
    const {params = [], ...rest} = router.query;

return <>
in here oe blogs - catched all routes page
<ul>
{params.map(item => <li key={item}>{item}  </li>)}
</ul>

</>;
}

export default BlogsPage;