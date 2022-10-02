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

router.post("/update/(:id)", async (req, res) => {
    const doc = await req.body;
    console.log(doc);
    if (doc.text) {
        const add = await docModel.updateDoc(req.params.id, doc);
        res.status(201).json({ data: doc});
    } else {
        return res.status(400).json({
            errors: {
                message: "Text is missing, please try again.",
            },
        });
    }

});

router.delete("/delete/(:id)", async (req, res) => {
    console.log(req.params.id);
    if (req.params.id) {
        const add = await docModel.delDoc(req.params.id);
        res.status(201).json({ data: id});
    } else {
        return res.status(400).json({
            errors: {
                message: "Id is missing, please try again.",
            },
        });
    }
});

module.exports = router;