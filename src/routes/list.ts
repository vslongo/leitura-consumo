import { Router, Request, Response } from 'express';

const router = Router();

router.get('/:customer_code/list', async (req: Request, res: Response) => {
    const { customer_code } = req.params;
    const { measure_type } = req.query;

    // Validação do measure_type
    if (measure_type && measure_type !== 'WATER' && measure_type !== 'GAS') {
        return res.status(400).json({
            error_code: "INVALID_TYPE",
            error_description: "Tipo de medição não permitida"
        });
    }

    // Buscar as medidas no banco de dados (simulação)
    const measures = [
    {
        measure_uuid: 'uuid-123',
        measure_datetime: new Date(),
        measure_type: 'WATER',
        has_confirmed: true,
        image_url: 'https://example.com/image1.jpg'
    },
    {
        measure_uuid: 'uuid-456',
        measure_datetime: new Date(),
        measure_type: 'GAS',
        has_confirmed: false,
        image_url: 'https://example.com/image2.jpg'
    }
];  // Substitua pela busca no banco de dados

    if (measures.length === 0) {
        return res.status(404).json({
            error_code: "MEASURES_NOT_FOUND",
            error_description: "Nenhuma leitura encontrada"
        });
    }

    res.status(200).json({
        customer_code: customer_code,
        measures: measures
    });
});

export default router;
