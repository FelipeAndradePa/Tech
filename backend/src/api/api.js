module.exports = (app, repository) => {
    //rota para lidar com a requisição POST vinda do frontend
    app.post('/message', async (req, res) => {
        try {
            const result = await repository.insertMessage(req.body)
            if (result) {
                repository.sendEmailSuport(req.body)
                res.status(201).json({ message: result.message });
              } else {
                res.status(500).json({ error: result.message });
              }

          } catch (error) {
                console.error('Erro na rota /message:', error);
                res.status(500).json({ error: 'Erro na rota /message.' });
          }
    })

    app.post('/form', async (req, res) => {
      try {
        const result = await repository.insertForm(req.body)
        if(result) {
          res.status(201).json({ message: result.message });
        } else {
          res.status(500).json({ error: result.message });
        } 
      } catch (error) {
            console.error('Erro na rota /form:', error);
            res.status(500).json({ error: 'Erro na rota /form.'});
      }
    })

    app.post('/login', async (req, res) => {
      try {
        const result = await repository.consultLogin(req.body)
        if(result.message > 0) {
          res.status(201).json({ message: result.message });
        } else {
          res.status(500).json({ error: result.message });
        } 
      } catch (error) {
            console.error('Erro na rota /form:', error);
            res.status(500).json({ error: 'Erro na rota /form.'});
      }
    })
}
