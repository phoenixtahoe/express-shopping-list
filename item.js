const items = require("./fakeDb")

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        items.push(this);
    }
  
    static findAll() {
        return items
    }

    static find(item) {
        let $item = items.find(e => e.name === item)
        
        if ($item) {
            return ($item)
        } else {
            throw {message: "Not Found", status: 404}
        }
    }

    static remove(item) {
        let $item = items.find(e => e.name === item)

        if ($item !== undefined) {
            items.pop($item)
        } else {
            throw {message: "Not Found", status: 404}
        }
    }

    static update(item, data) {
        let $item = Item.find(item);
        
        if ($item === undefined) {
            throw {message: "Not Found", status: 404}
        }

        $item.name = data.name;
        $item.price = data.price;
    
        return $item;
    }
}

module.exports = Item;
