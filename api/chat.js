export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

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

        if (mensagem.length > 2000) {
            return res.status(400).json({
                error: "Mensagem muito longa."
            });
        }

        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            console.error("OPENAI_API_KEY não configurada.");

            return res.status(500).json({
                error: "A IA ainda não está configurada no servidor."
            });
        }

        const respostaOpenAI = await fetch(
            "https://api.openai.com/v1/responses",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },

                body: JSON.stringify({
                    model: "gpt-5-mini",

                    instructions: `
Você é Daniel Danilo, o DD, assistente virtual da AEDA
(Academia de Estudo Digital Acessível).

Seu objetivo é ajudar estudantes, especialmente estudantes
com deficiência, durante seus estudos para o ENEM.

Responda em português do Brasil.

Seja acolhedor, claro, didático e respeitoso.

Adapte as explicações quando o estudante solicitar.

Ajude o estudante a compreender o raciocínio em vez de
simplesmente fazer atividades no lugar dele.

Não invente informações.

Quando não tiver certeza, deixe isso claro.

A IA é uma ferramenta de apoio e não substitui professores,
fontes confiáveis ou profissionais especializados.

Não solicite dados pessoais desnecessários.

Evite linguagem capacitista.
                    `,

                    input: mensagem,
                    max_output_tokens: 600
                })
            }
        );

        const dados = await respostaOpenAI.json();

        if (!respostaOpenAI.ok) {
            console.error("Erro da OpenAI:", dados);

            return res.status(500).json({
                error: "Não foi possível obter uma resposta da IA."
            });
        }

        return res.status(200).json({
            resposta: dados.output_text ||
                "Não consegui gerar uma resposta."
        });

    } catch (error) {
        console.error("Erro no servidor:", error);

        return res.status(500).json({
            error: "Erro interno ao conectar com a IA."
        });
    }
}
