const express = require("express");
const router = new express.Router();
const Item = require('../item');

router.get('', (req, res, next) => {
    try {
        return res.json({ items: Item.findAll() });
    } catch(err) {
        return next(err)
    }
});

router.post('', (req, res, next) => {
    try {
       return res.json(new Item(req.body.name, req.body.price))
    } catch(err) {
       return next(err) 
    }
})

router.get('/:name', (req, res, next) => {
    try {
        let $item = Item.find(req.params.name);
        return res.json({item:$item});
    } catch(err) {
        return next(err)
    }
});

router.delete('/:name', (req, res, next) => {
    try {
        Item.remove(req.params.name);
        return res.json({message:'Deleted'});
    } catch(err) {
        return next(err)
    }
})

router.patch('/:name', (req, res, next) => {
    try {
        let $item = Item.update(req.params.name, req.body);
        return res.json({ 'Updated': $item });
    } catch(err) {
        return next(err)
    }
})

module.exports = router