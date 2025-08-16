const fs = require('fs');

const now = new Date();
const readmeContent = `# Halo 👋

Ini adalah README yang diperbarui otomatis.

⏰ Waktu sekarang: ${now.toLocaleString()}

> Update otomatis menggunakan GitHub Actions
`;

fs.writeFileSync("README.md", readmeContent);
