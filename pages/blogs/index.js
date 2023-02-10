const BlogsPage = ({testData}) => {
    return <>in here blogs index page {testData}</>
}

export function  getStaticProps() {
    return {
        props: {
            testData: "test data props"
        }
    }
}

export default BlogsPage;