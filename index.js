const exppress = require('express');
const app = exppress();
const port = 3000;
const db = require('./models');
app.use(exppress.json());
app.use(exppress.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log('Server started on port 3000' );
});

// Test database connection
db.sequelize.sync()
  .then(() => {
    app.listen(port, () => {
        console.log('Server Started');
    })
})
.catch((err) => {
 console.log(err);
});

app.post('/buku', async (req, res) => {
    const data = req.body;
    try {
        const buku = await db.Buku.create(data);
        res.send(buku);
    } catch (error) {
        res.send(err);
    }
});

app.get('/buku',  async (req, res) => {
    try {
        const buku = await db.buku.findAll();
        res.send(buku);
    }catch (error) {
        res.send(err);
    }
});

app.put('/buku/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const buku = await db.Buku.findByPk(id);
        if (!buku) {
            return res.status(404).send({ message: 'Buku not found' });
        }
        await komik.update(data);
        res.send({message: 'Buku updated successfully', komik});
    } 
    catch (error) {
        res.status(500).send(err);
    } 
});

app.delete('/buku/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const buku = await db.Buku.findByPk(id);
        if (!buku) {
            return res.status(404).send({ message: 'Buku not found' });
        }
        await komik.destroy();
        res.send({ message: 'Buku deleted successfully' });
    } catch (error) {
        res.status(500).send(err);
    }
});