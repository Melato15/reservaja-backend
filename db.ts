import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'nome_do_banco_de_dados'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida com o banco de dados MySQL');
});

export default connection;

// Substitua 'localhost', 'seu_usuario', 'sua_senha' e 'nome_do_banco_de_dados' 
// pelos detalhes de conexão corretos para o seu ambiente.