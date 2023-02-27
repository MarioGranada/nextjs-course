function handler(req,res){
    res.clearPreviewData();
    // res.end('Preview Mode Disabled');
    res.redirect(req.query.redirectTo);
}

export default handler;