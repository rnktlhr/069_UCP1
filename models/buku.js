module.exports = (sequelize, DataTypes) => {
    const Buku = sequelize.define('Buku', {
        id: {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
        },
        judul: {
        type: DataTypes.STRING,   
        }, 
        pengarang: {
        type: DataTypes.STRING,
        },
        tahunterbit: {
        type: DataTypes.INTEGER,
        },
        bidang: {
        type: DataTypes.STRING,
        }
    });
    return Buku;
}