const NewsPage = ({testData}) => {
    return <>in here news index page {testData}</>
}

export function  getStaticProps() {
    return {
        props: {
            testData: "test data props"
        }
    }
}

export default NewsPage;