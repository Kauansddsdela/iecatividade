const axios = require('axios');

async function consultarCep(cep) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        console.log('Dados do CEP:', response.data);
    } catch (error) {
        console.error('Erro ao consultar o CEP:', error.message);
        process.exit(1); // Indica falha no pipeline se houver erro
    }
}

// Consultar um CEP de exemplo
consultarCep('08295005');
