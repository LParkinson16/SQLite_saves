const db = require('./db.js');
const Menu = require('./menu.js');


describe ('Menu save test', ()=>{
    beforeAll((done) =>{
        db.run('CREATE TABLE IF NOT EXISTS menu (title TEXT, restaurant_id INTEGER,)', done);
    });
    test('can save menu data', (done)=> {
        const menuAdd = new Menu('Mains',1);
        menuAdd.save(()=>{
            db.get('SELECT * FROM menu WHERE title = "Mains"', (err, row)=>{
                expect (row.title).toEqual('Mains');
                expect (row.id).toEqual(1);
                done()
            });
        });
    });
});

