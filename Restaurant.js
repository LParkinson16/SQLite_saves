const db = require('./db.js');

class Restaurant{
    constructor(name, image){
        this.name = name;
        this.image = image;
        this.menus= []
    }
    save(cb){
        db.run('INSERT INTO Restaurant(name, image) VALUES (?, ?)', [this.name, this.image], cb );
    }
    async addMenu(title) {
        const menu =  new Menu({title, restaurant_id: this.id})
        this.menus.push(menu)
    }
}


module.exports = Restaurant