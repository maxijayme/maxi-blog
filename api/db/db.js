import Sequelize from 'sequelize';
const path = 'mysql://root@localhost:3306/maxi_blog'
const db = new Sequelize(path);

db.authenticate().catch(err =>{
    console.log(err)
})

export default db;