import createError from "http-errors";

// Middleware para tratar erros de rota (404 Not Found)
function notFoundHandler(req, res, next) {
  // Se nenhuma rota correspondeu, cria um erro 404
  next(createError(404, 'Página não encontrada'));
}

// Middleware de tratamento de erros genérico
function errorHandler(err, req, res, next) {
  // Definir o código de status HTTP e mensagem padrão se não fornecidos
  const statusCode = err.status || 500;
  const message = err.message || 'Erro interno do servidor';

  // Log do erro (opcional)
  console.error(`[Erro] Status: ${statusCode}, Mensagem: ${message}`);

  // Enviar a resposta do erro ao cliente
  res.status(statusCode).json({
    status: statusCode,
    message: message,
    ...(statusCode === 500 && { stack: err.stack }) // Retornar o stack trace apenas para erro 500
  });
}

export  { notFoundHandler, errorHandler };

