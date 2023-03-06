import {getSession, signOut, useSession} from 'next-auth/react';

const NewsPage = ({testProp}) => {
    const signOutHandler = (event) => {
        event.preventDefault();
        signOut();
    };

    const {data: session, loading} = useSession();

    return <>
    <p>{testProp}</p>
    {session && !loading && < button onClick={signOutHandler}>Sign Out</button>}
    </>
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if(!session) {
        return {
            redirect: {
                destination: '/api/auth/signin?callbackUrl=http://localhost:3000/news/session-protected-route',
                permanent: false
            }
        }
    }
    return {
        props: {
            session,
            testProp: "this page is protected behind a login wall - server side",
        }
    }
}

export default NewsPage;