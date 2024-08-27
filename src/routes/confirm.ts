import { Router, Request, Response } from 'express';

const router = Router();

router.patch('/confirm', async (req: Request, res: Response) => {
    const { measure_uuid, confirmed_value } = req.body;


    // Validação básica dos parâmetros
    if (!measure_uuid || typeof confirmed_value !== 'number') {
        return res.status(400).json({
            error_code: "INVALID_DATA",
            error_description: "Dados fornecidos no corpo da requisição são inválidos."
        });
    }

    // Verifique se a leitura existe e se já foi confirmada (simulação)
    const leitura = {
      confirmed: false,  // Simule que a leitura não foi confirmada
      confirmed_value: 0  // Simule que ainda não há valor confirmado
    };  // Busque no banco de dados (simulação)

    if (!leitura) {
        return res.status(404).json({
            error_code: "MEASURE_NOT_FOUND",
            error_description: "Leitura não encontrada."
        });
    }

    if (leitura.confirmed) {
        return res.status(409).json({
            error_code: "CONFIRMATION_DUPLICATE",
            error_description: "Leitura do mês já confirmada."
        });
    }

    // Salvar o valor confirmado no banco de dados (simulação)
    leitura.confirmed_value = confirmed_value;
    leitura.confirmed = true;

    res.status(200).json({ success: true });
});

export default router;
