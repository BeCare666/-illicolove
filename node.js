const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
require('dotenv').config();

// Créer le serveur HTTP
const server = http.createServer((req, res) => {
    // Analyser l'URL de la requête
    const parsedUrl = url.parse(req.url, true);

    // Gérer la route '/config'
    if (parsedUrl.pathname === '/config') {
        // Lire les variables d'environnement depuis le fichier .env
        const config = {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            // Ajouter d'autres variables d'environnement ici...
        };

        // Envoyer les variables d'environnement au client
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(config));
    } else {
        // Gérer les autres routes ou fichiers statiques
        const filePath = path.join(__dirname, parsedUrl.pathname);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            } else {
                res.writeHead(200);
                res.end(data);
            }
        });
    }
});

// Démarrer le serveur sur le port spécifié dans le fichier .env ou par défaut 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

// Accéder aux variables d'environnement chargées depuis le fichier .env
// const apiKey =  process.env.FIREBASE_API_KEY;
// const authDomain =  process.env.FIREBASE_AUTH_DOMAIN;
// const databaseURL =  process.env.FIREBASE_DATABASE_URL;
// const projectId =  process.env.FIREBASE_PROJECT_ID;
// const storageBucket =  process.env.FIREBASE_STORAGE_BUCKET;
// const messagingSenderId =  process.env.FIREBASE_MESSAGING_SENDER_ID;
// const appId =  process.env.FIREBASE_APP_ID;