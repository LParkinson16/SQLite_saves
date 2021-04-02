const db = require('./db.js');
class Menu{
    constructor(title, restaurant_id){
        this.title = title;
        this.restaurant_id = restaurant_id;
        this.menuList =[]
    }
    save(cb){
        db.run('INSERT INTO Menu(title, restaurant_id) VALUES (?, ?)', [this.title, this.restaurant_id], cb );
    }
    async addMenuItem(title) {
        const addMenuItem = new menuItem({itemName, itemPrice, menu_id: this.id})
        this.menuList.push(addMenuItem)
    }
}



module.exports = Menu