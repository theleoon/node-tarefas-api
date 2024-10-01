
// Middleware de rota para /admin
function adminHandler (req, res, next) {
    const usuario = "teste";
    const senha = "alura123";
  
    let paramUsuario = req.query.usuario;
    let paramSenha = req.query.senha;
  
    if(usuario === paramUsuario && senha === paramSenha){
      console.log('Acesso à rota /admin');
      next();
    }
    res.status(401).send({ message: `Acesso negado, informe usuario e senha válido`});
  };

  export  { adminHandler };