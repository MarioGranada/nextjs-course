import Link from "next/link";
import { useRouter } from "next/router";
import {getSession, signIn, signOut, useSession} from 'next-auth/react';

const NewsPage = ({testProp, title, description}) => {
    const router = useRouter();
    const routeWithoutReplaceHandler = () => {router.push('/users')};
    const routeWithReplaceHandler = () => {router.replace('/users')};
    const signInHandler = (event) => {
        event.preventDefault();
        signIn();
    };

    const signOutHandler = (event) => {
        event.preventDefault();
        signOut();
    };

    const {data: session, loading} = useSession();

    return <>
    <h1>{title}</h1>
      <p>{description}</p>
    in here news index page {testProp}
    <div>
        <div>
         {!session && !loading && <button onClick={signInHandler}>Sign In</button>}
         {session && !loading && < button onClick={signOutHandler}>Sign Out</button>}
        </div>
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
        <button onClick={routeWithoutReplaceHandler}>Router.push without replace</button>
        <br/>
        <button onClick={routeWithReplaceHandler}>Router.push with replace</button>
    </div>
    </>
}

export async function getServerSideProps(context) {
    console.log('in here running getStaticProps and checking preview mode');
    console.log('getStaticProps runs on request on previewMode');
    const session = await getSession(context);

    return {
        props: {
            session,
            testProp: "test data props",
            title: context.preview ? "List of Draft articles" : "List of published articles",
            description: context.preview ?  context.previewData.testDescription : 'this is a placeholder description'
        }
    }
}

export default NewsPage;