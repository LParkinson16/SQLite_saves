const db = require('./db.js');
const menuItem = require('./menuItem.js');

describe ('Menu item save test', ()=>{
    beforeAll((done) =>{
        db.run('CREATE TABLE IF NOT EXISTS menu (itemName, itemPrice, menu_id)', done);
    });
    test('can save menu data', (done)=> {
        const menuAdd = new menuItem('itemOne',1.99, 1);
        menuAdd.save(()=>{
            db.get('SELECT * FROM menu WHERE itemName = "itemOne"', (err, row)=>{
                expect (row.itemName).toEqual('itemOne');
                expect (row.id).toEqual(1);
                done()
            });
        });
    });
});