import Sequelize from 'sequelize';
const path = 'mysql://root@localhost:3306/maxi_blog'
// aquí definimos los parámetros de conexion a la base de datos usando sequelize
const db = new Sequelize(path);

db.authenticate().catch(err =>{
    console.log(err)
})

export default db;