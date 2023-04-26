const express = require("express");
const router = express.Router();
const {
    getAllEntries,
    getEntryOne,
    getEntryTwo,
    getEntryThree,
    getEntryFour,
    getEntryFive,
} = require("../controllers/entries");


router.route("/all").get(getAllEntries);
router.route("/entryone").get(getEntryOne);   
router.route("/entrytwo").get(getEntryTwo);
router.route("/entrythree").get(getEntryThree);
router.route("/entryfour").get(getEntryFour);
router.route("/entryfive").get(getEntryFive);


module.exports = router;