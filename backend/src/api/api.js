module.exports = (app, repository) => {
    //rota para lidar com a requisição POST vinda do frontend
    app.post('/form', async (req, res) => {
        try {
            
            const result = await repository.insertForm(req.body)

            if (result.success) {
                repository.sendEmail(req.body)
                res.status(201).json({ message: resultado.message });
              } else {
                res.status(500).json({ error: resultado.message });
              }

          } catch (error) {
                console.error('Erro na rota /inserir-dados:', error);
                res.status(500).json({ error: 'Erro na rota /inserir-dados.' });
          }
    })
}
