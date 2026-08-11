export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Método não permitido"
        });
    }

    try {
        const { mensagem } = req.body;

        if (!mensagem) {
            return res.status(400).json({
                error: "Mensagem não informada"
            });
        }

        return res.status(200).json({
            resposta: "O DD recebeu sua mensagem: " + mensagem
        });

    } catch (error) {
        return res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
}
