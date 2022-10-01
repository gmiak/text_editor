var express = require("express");
var router = express.Router();

const docModel = require("../model/doc.model");

router.get("/", async (req, res) => {
    const docs = await docModel.getDocs();

    return res.json({
        data: docs,
    });
});

module.exports = router;