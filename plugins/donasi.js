let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [081220670449]
│ • GOPAY [081220670449]
│ • IG [https://instagram.com/xnoob_ganz]
╰────
TRIMAKASIH YANG SUDAH DONASI KE BOT INI:)`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
