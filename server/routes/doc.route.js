var express = require("express");
var router = express.Router();

const docModel = require("../model/doc.model");

router.get("/", async (req, res) => {
    const docs = await docModel.getDocs();

    return res.json({
        data: docs,
    });
});

router.post("/create", async (req, res) => {
    const doc = await req.body;
    console.log(doc);
    if (doc.title) {
        const add = await docModel.addDoc(doc);
        res.status(201).json({ data: doc});
    } else {
        return res.status(400).json({
            errors: {
                message: "Title is missing, please try again.",
            },
        });
    }

});

module.exports = router;