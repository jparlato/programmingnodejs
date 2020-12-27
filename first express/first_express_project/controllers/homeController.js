exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
}

exports.user_SignUpProcessor = (req, res) => {
    res.send("you are signing up!");
}

exports.respondWithName = (req, res) => {
    //let paramsName = req.params.myName;

    res.render('index', { name: paramsName });

}