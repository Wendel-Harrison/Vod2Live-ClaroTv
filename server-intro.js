const { ChannelEngine } = require('eyevinn-channel-engine');

class MyAssetManager {
    constructor() {
        this.assets = {
            "myfirstchannel": [
                {
                    id: "e62ae11e-eee0-4372-812d-90730241831b",
                    title: "Trailer 1",
                    uri: "http://getcdn.nowonline.com.br/Content/h3p5/VOD/15596/16874/3cb21f12-21ad-4c14-bdeb-6be1605518a0/f4d191c5-2938-9a89-b0bb-479d2bc94678/index.m3u8"
                },
                {
                    id: "3a65e827-8c75-4e7b-90d5-15f797ed1646",
                    title: "Anuncio 1",
                    uri: "http://getcdnlab.clarocdn.com.br/Content/h3p0/VOD/3142/13771/32fa407e-fd9c-4322-9de2-ddf22b7f4198/2ae1bdcf-be7c-fdbb-5d93-276b0fae3648/index.m3u8"
                },
                {
                    id: "dd21b69f-8096-4ee5-a899-9cdabb9371b4",
                    title: "Trailer 2",
                    uri: "http://getcdn.nowonline.com.br/Content/h3p5/VOD/2896/8491/189b8c92-c07b-418b-822d-3d3cbdf8fa83/f4d191c5-2938-9a89-b0bb-479d2bc94678/index.m3u8"
                },
                {
                    id: "dd21b69f-8096-4ee5-a899-9cdabb9371b4",
                    title: "Anuncio 2",
                    uri: "http://getcdnlab.clarocdn.com.br/Content/h3p0/VOD/3539/13241/a4a08b07-61e5-4850-8866-b2e07ac77030/f4d191c5-2938-9a89-b0bb-479d2bc94678/index.m3u8"
                },
                {
                    id: "dd21b69f-8096-4ee5-a899-9cdabb9371b4",
                    title: "Trailer 3",
                    uri: "http://getcdn.nowonline.com.br/Content/HLS_2/VOD/trailer/62/27/5b5e930b-8da9-453e-a3a2-44b0e3a56227/index.m3u8"
                },
                {
                    id: "dd21b69f-8096-4ee5-a899-9cdabb9371b4",
                    title: "Trailer 3",
                    uri: "http://getcdn.nowonline.com.br/Content/HLS_2/VOD/trailer/62/27/5b5e930b-8da9-453e-a3a2-44b0e3a56227/index.m3u8"
                }
            ]
        };
        this.currentIndex = 0;
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
