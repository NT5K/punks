const path = require('path');
// const cors = require('cors')
const express = require('express');
const router = express.Router();
var axios = require("axios")


module.exports = router;


router.get('/minter', (__, res) => {
    res.sendFile(path.join(__dirname, '/../dist/html/minter.html'));
});
router.get('/', (__, res) => {
    res.sendFile(path.join(__dirname, '/../dist/html/index.html'));
});
router.get('/stats', (__, res) => {
    res.sendFile(path.join(__dirname, '/../dist/html/stats.html'));
});
router.get('/marketplace', (__, res) => {
    res.sendFile(path.join(__dirname, '/../dist/html/marketplace.html'));
});
router.get('/game', (__, res) => {
    res.sendFile(path.join(__dirname, '/../dist/html/game.html'));
});
router.get('/click', (__, res) => {
    res.sendFile(path.join(__dirname, '/../dist/html/click.html'));
});
router.get('/place', (__, res) => {
    res.sendFile(path.join(__dirname, '/../dist/html/place.html'));
});


