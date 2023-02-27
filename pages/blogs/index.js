const BlogsPage = ({testData}) => {
    return <>in here blogs index page {testData} <br/> {process.env.NEXT_PUBLIC_TEST_ENV} </>
}

export function  getStaticProps() {
    return {
        props: {
            testData: "test data props"
        }
    }
}

export default BlogsPage;