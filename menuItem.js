const db = require('./db.js');

class menuItem{
    constructor(itemName, itemPrice, menu_id){
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.menu_id = menu_id;
    }
    save(cb){
        db.run('INSERT INTO menuItem(itemName, itemPrice, menu_id) VALUES (?)', [this.itemName, this.itemPrice, this.menu_id], cb );
    }
    async addMenu(title) {
        const menus = new menuItem({itemName, itemPrice, menu_id: this.id})
        this.menus.push(menuList)
    }
}

module.exports = menuItem
