export default async function handler(req, res) {
    // Permite que o site converse com o backend
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Responde às verificações do navegador
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    // Aceita somente POST
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Método não permitido"
        });
    }

    try {
        const { mensagem } = req.body || {};

        if (!mensagem || typeof mensagem !== "string") {
            return res.status(400).json({
                error: "Mensagem não informada"
            });
        }

        // Verifica se a chave existe na Vercel
        if (!process.env.OPENAI_API_KEY) {
            return res.status(500).json({
                error: "OPENAI_API_KEY não configurada na Vercel."
            });
        }

        const respostaOpenAI = await fetch(
            "https://api.openai.com/v1/responses",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
                },

                body: JSON.stringify({
                    model: "gpt-5-mini",
                    instructions:
                        "Você é Daniel Danilo, chamado de DD, o assistente virtual da AEDA. " +
                        "Você ajuda estudantes, especialmente estudantes com deficiência, " +
                        "a aprender de forma acessível, responsável e autônoma. " +
                        "Explique assuntos de maneira clara, acolhedora e didática. " +
                        "Não faça a tarefa do estudante simplesmente por ele; ajude-o a aprender. " +
                        "Quando apropriado, use exemplos, passos e linguagem simples.",
                    input: mensagem
                })
            }
        );

        const dados = await respostaOpenAI.json();

        if (!respostaOpenAI.ok) {
            console.error("Erro da OpenAI:", dados);

            return res.status(respostaOpenAI.status).json({
                error: "Erro ao consultar a Inteligência Artificial."
            });
        }

        const resposta =
            dados.output_text ||
            "O DD não conseguiu gerar uma resposta.";

        return res.status(200).json({
            resposta: resposta
        });

    } catch (error) {
        console.error("Erro no servidor:", error);

        return res.status(500).json({
            error: "Erro interno do servidor."
        });
    }
            }
