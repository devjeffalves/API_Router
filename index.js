// Sunc do Sequelize com nosso banco de dados, as tabelas serão mapeadas de forma correta 
// IIFE ( Immediately Invoked Function Expression) função em Javascript que e executada assim que definida.
(async () => {
    const database = require('./data_base/db');
    const User = require('./models/user');

    try { 
        const resultado = await database.sync();
        console.log(resultado);

    } catch (error) {
        console.log(error);
    }

// Insere registro via Sequelize
const resultadoCreate = await User.create ({
    name: 'Mirella',
    age: 5,
    address: 'Viamão'

})

console.log(resultadoCreate);

// Buscar os registros inseridos
const Users = await User.findAll();
console.log(Users);



}) ();