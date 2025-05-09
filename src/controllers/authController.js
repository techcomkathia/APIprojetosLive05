const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userService = require('../services/userService');

const secret = 'seusegredoaqui'; // Idealmente, use variável de ambiente (use o .env)



const login = async (req, res) => {
    
    try{
        // criando um token JWT
        // recebe um objeto com as chaves userName e password e executa o service getUserByUserName
        // se o usuário for encontrado, compara a senha enviada com a senha armazenada no banco de dados
        // utiliza o bcrypt para comparar as senhas (bcrypt.compare)
        // se as senhas forem iguais, retorna um token JWT e o status 200
        // se as senhas forem diferentes, retorna um status 401 com a mensagem 'Senha incorreta'
        const { userName, password } = req.body;

        if (!userName || !password) {
            return res.status(400).json({ message: 'Todos os campos devem ser preenchidos' });
        }

        const user = await userService.getUserByUserName(userName);

        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }

        //usuário existe , fazer agora a verificação da senha

        const passwordMatch = await bcrypt.compare(password, user.password); //true ou false
        console.log(passwordMatch);

        if(!passwordMatch){
            return res.status(401).json({ message: 'Senha incorreta' });

        }

        // gerar o token para a senha correta com JWT
        const token = jwt.sign({user:user.userName, email:user.email}, secret, {expiresIn: '1h'});

        res.status(200).json({message: 'Login realizado com sucesso', token: token });

    }
    catch(error){
        res.status(500).json({ message: 'Erro ao fazer login', erro: error });
    }
 
};

module.exports = { login };
