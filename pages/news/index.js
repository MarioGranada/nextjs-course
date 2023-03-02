import Link from "next/link";
import { useRouter } from "next/router";

const NewsPage = ({testData, title, description}) => {
    const router = useRouter();
    const routeWithoutReplace = () => {router.push('/users')};
    const routeWithReplace = () => {router.replace('/users')};
    return <>
    <h1>{title}</h1>
      <p>{description}</p>
    in here news index page {testData}
    <div>
    <hr/>
    <h2>Link component vs. {"<a>"} tag </h2>
        <Link href='/'>Home with Link component</Link>
        <br/>
        <a href='/'>Home with {"<a>"} tag</a>
        <hr/>
    </div>
    <div>
    <hr/>
    <h2>Link component using replace prop </h2>
        <Link href='/users'>Link component without replace</Link>
        <br/>
        <Link href="/users" replace>Link component with replace</Link>
        <hr/>
    </div>
    <div>
        <hr/>
        <h2>Use router.push </h2>
        <button onClick={routeWithoutReplace}>Router.push without replace</button>
        <br/>
        <button onClick={routeWithReplace}>Router.push with replace</button>
    </div>
    </>
}

export function getStaticProps(context) {
    console.log('in here running getStaticProps and checking preview mode');
    console.log('getStaticProps runs on request on previewMode');
    return {
        props: {
            testData: "test data props",
            title: context.preview ? "List of Draft articles" : "List of published articles",
            description: context.preview ?  context.previewData.testDescription : 'this is a placeholder description'
        }
    }
}

export default NewsPage;