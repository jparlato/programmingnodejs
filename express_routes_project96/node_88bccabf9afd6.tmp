const port = 3000, 
    express = require("express"),
    app = express();

    app.use((req, res, next) => {
        console.log(`request made to: ${req.url}`);
        next();
    })
    

app.get("/items/:vegetable", (req, resp) => {
    let veg = req.params.vegetable;
    resp.send(`This is the page for ${veg}`);

});

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successfull");
    
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);

})