const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 81;

// Exemplo de lista de assets (simulando uma base de dados)
let assets = [
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
    // Adicione mais itens conforme necessário
];

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(bodyParser.json());

// GET para obter todos os assets
app.get('/assets', (req, res) => {
    res.json(assets);
});

// POST para adicionar um novo asset
app.post('/assets', (req, res) => {
    const newAsset = req.body;
    assets.push(newAsset);
    res.status(201).json(newAsset);
});

// PUT para atualizar um asset existente
app.put('/assets/:id', (req, res) => {
    const assetId = req.params.id;
    const updatedAsset = req.body;
    assets = assets.map(asset => (asset.id === assetId ? updatedAsset : asset));
    res.json(updatedAsset);
});

// DELETE para excluir um asset
app.delete('/assets/:id', (req, res) => {
    const assetId = req.params.id;
    assets = assets.filter(asset => asset.id !== assetId);
    res.status(204).end();
});

app.listen(port, () => {
    console.log(`Servidor rodando em ${port}`);
});