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
    async addMenu(title) {
        const menu = new Menu({title, restaurant_id: this.id})
        this.menus.push(menu)
    }
}



module.exports = Menu