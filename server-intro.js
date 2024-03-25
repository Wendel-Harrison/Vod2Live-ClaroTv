const axios = require('axios');
const { ChannelEngine } = require('eyevinn-channel-engine');

const apiUrl = "http://201.17.21.186:3000/assets"
class MyAssetManager {
    constructor() {
        this.assets = {
            "myfirstchannel": [
                
            ]
        };
        this.currentIndex = 0;
        async function getAssets() {
            try {
                const response = await axios.get(apiUrl);
                // Verifica se a resposta possui dados
                if (response.data && Array.isArray(response.data)) {
                    myfirstchannel.push(...response.data);
                    console.log('Dados recebidos e adicionados em myfirstchannel:', myfirstchannel);
                } else {
                    console.log('A resposta da API não possui dados válidos.');
                }
            } catch (error) {
                console.error('Erro ao fazer a requisição:', error);
            }
        }
        getAssets();
    }


    async getNextVod(vodRequest) {
        const assets = this.assets["myfirstchannel"];
        const vod = assets[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % assets.length;

        await new Promise(resolve => setTimeout(resolve, 9000));
        return vod;
    }
}

class MyChannelManager {
    getChannels() {
        return [
            { id: "myfirstchannel"}
        ];
    }
}



const myAssetManager = new MyAssetManager();
const myChannelManager = new MyChannelManager();
const engine = new ChannelEngine(myAssetManager, { channelManager: myChannelManager });
engine.start();
engine.listen(process.env.PORT || 80);
