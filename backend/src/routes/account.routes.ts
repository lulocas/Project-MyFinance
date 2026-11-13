import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Lista de contas',
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Detalhes da conta com ID: ${id}`,
  });
});

router.post('/', (req, res) => {
    const { name, balance } = req.body;
    res.json({
      message: `Conta criada com sucesso! Nome: ${name}, Saldo: ${balance}`,
    });
});

export default router;