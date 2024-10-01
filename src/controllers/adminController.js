
class AdminController {

    static async painelDeAdmin (req, res) {
      try {
        res.send('Área de administração');
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na requisição` });
      }
    };

}

export default AdminController;