export default async function handler(req, res) {
    // Permite que o GitHub Pages converse com este backend
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Responde à verificação do navegador
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    // Só aceitamos POST
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
