const NewsPage = ({testData, title, description}) => {
    return <>
    <h1>{title}</h1>
      <p>{description}</p>
    in here news index page {testData}</>
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