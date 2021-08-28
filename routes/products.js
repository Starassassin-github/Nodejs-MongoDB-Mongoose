var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("product");
});

router.get('/add', function(req, res, next) { //ส่งข้อความไปที่ ADD
    res.send('Add Product');
});

router.get('/edit', function(req, res, next) { //ส่งข้อความไปที่ Edit
    res.send('Edit Product');
});

router.get('/delete', function(req, res, next) { //ส่งข้อความไปที่ Delete
    res.send('Delete Product');
});
  

module.exports = router;
  