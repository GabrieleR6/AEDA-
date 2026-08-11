/**
 * AEDA - Gerenciador de Progresso dos Cronogramas
 * Salva e calcula automaticamente o progresso do aluno no localStorage.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa os checkboxes existentes na página atual
    const checkboxes = document.querySelectorAll('.tarefa input[type="checkbox"]');

    checkboxes.forEach(chk => {
        // Carrega estado salvo no localStorage
        const statusSalvo = localStorage.getItem(chk.id);
        if (statusSalvo === 'true') {
            chk.checked = true;
            if (chk.parentElement) {
                chk.parentElement.classList.add('concluido');
            }
        }

        // Evento de alteração de cada tarefa
        chk.addEventListener('change', (e) => {
            const status = e.target.checked;
            localStorage.setItem(chk.id, status);
            
            if (status) {
                chk.parentElement.classList.add('concluido');
            } else {
                chk.parentElement.classList.remove('concluido');
            }

            // Atualiza métricas globais se houver um painel de estatísticas presente
            atualizarProgressoGeral();
        });
    });

    // 2. Chama a atualização das estatísticas na abertura da página
    atualizarProgressoGeral();
});

/**
 * Função utilitária para calcular o progresso total por prefixo de ID
 * Exemplo de uso: calcularProgressoPorPrefixo('c12m_') -> Retorna a % das 42 semanas
 */
function calcularProgressoPorPrefixo(prefixo) {
    let total = 0;
    let concluidas = 0;

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if (chave.startsWith(prefixo)) {
            total++;
            if (localStorage.getItem(chave) === 'true') {
                concluidas++;
            }
        }
    }

    const porcentagem = total > 0 ? Math.round((concluidas / total) * 100) : 0;
    return { total, concluidas, porcentagem };
}

/**
 * Atualiza elementos de barra de progresso ou porcentagem na tela (caso existam)
 */
function atualizarProgressoGeral() {
    // Cronograma 12 Meses (IDs começam com c12m_)
    const c12m = calcularProgressoPorPrefixo('c12m_');
    const elemC12m = document.getElementById('progresso-12m');
    if (elemC12m) {
        elemC12m.innerText = `${c12m.porcentagem}%`;
    }

    // Cronograma 6 Meses (IDs começam com c6m_)
    const c6m = calcularProgressoPorPrefixo('c6m_');
    const elemC6m = document.getElementById('progresso-6m');
    if (elemC6m) {
        elemC6m.innerText = `${c6m.porcentagem}%`;
    }

    // Cronograma 3 Meses (IDs começam com c3m_)
    const c3m = calcularProgressoPorPrefixo('c3m_');
    const elemC3m = document.getElementById('progresso-3m');
    if (elemC3m) {
        elemC3m.innerText = `${c3m.porcentagem}%`;
    }

    // Cronograma 30 Dias (IDs começam com c30d_)
    const c30d = calcularProgressoPorPrefixo('c30d_');
    const elemC30d = document.getElementById('progresso-30d');
    if (elemC30d) {
        elemC30d.innerText = `${c30d.porcentagem}%`;
    }
}
