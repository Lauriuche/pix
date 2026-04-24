/**
 * ARQUIVO DE CONFIGURAÇÃO - Terminal POS $lauriuche
 * Guarde este arquivo com cuidado. 
 */

const CONFIG = {
    // Mercado Pago Access Token
    // Se usar APP_USR (Produção), lembre-se que chamadas diretas pelo navegador podem ser bloqueadas.
    // Use um Token de TESTE para desenvolvimento local ou um servidor Proxy no Render para produção.
    MP_ACCESS_TOKEN: "APP_USR-2084179504074922-042411-9d6918d42c7263e1baf8ad0c3f44052e-1631579027",

    // E-mail da conta do Mercado Pago para identificação das vendas
    PAYER_EMAIL: "pagamento@lauriuche.com",

    // Tempo de expiração do Pix em segundos (Padrão 10 minutos)
    EXPIRATION_TIME: 600,

    // URL do seu Backend no Render (Opcional - Recomendado para Produção)
    // Se preenchido, o terminal usará o servidor para criar o pagamento de forma segura.
    BACKEND_URL: "", 

    // Configurações do Terminal
    TERMINAL_NAME: "$LAURIUCHE",
    ENABLE_BEEP: true,
    ENABLE_VIBRATE: true
};

// Exportar para uso no HTML
if (typeof window !== 'undefined') {
    window.TERMINAL_CONFIG = CONFIG;
}
