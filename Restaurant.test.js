const db = require('./db.js');
const Restaurant = require('./Restaurant.js');

describe ('Restaurant save test', ()=>{
    beforeAll((done) =>{
        db.run('CREATE TABLE IF NOT EXISTS Restaurant (id INTEGER PRIMARY KEY, name TEXT, image TEXT)', done);
    });
    test('can save restaurant data', (done)=> {
        const restaurant = new Restaurant('Nandos', 'nandos.imgSrc');
        restaurant.save(()=>{
            db.get('SELECT * FROM Restaurant WHERE name = "Nandos"', (err, row)=>{
                expect (row.name).toEqual('Nandos');
                expect (row.id).toEqual(1);
                done()
            });
        });
    });
});

