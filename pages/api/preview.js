function handler(req, res) {
    res.setPreviewData({testDescription: 'this is a test for preview mode'});
    // res.end("Preview Mode Enabled");
    res.redirect(req.query.redirectTo);
}

export default handler;