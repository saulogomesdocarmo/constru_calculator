/**
 * Service Worker
 * @author Saulo Gomes do Carmo
 */

// Instalação do Service Worker
self.addEventListener('install', (event) => {
    console.log("Instalando o Service Worker...", event)
    // Pré carregamento em cache
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                console.log("Pré carregamento dos arquivos do app")
                cache.add('/constru_calculator')
                cache.add('/constru_calculator/index.html')
                cache.add('/constru_calculator/style.css')
                cache.add('/constru_calculator/app.js')
                cache.add('/constru_calculator/img/icon.png')
            })
    )
})

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
    console.log("Ativando o ServiceWorker...",
        event
    )
    return self.clients.claim() // Garantir o serviço em todos os documentos app
})

// Escutando requisições e "buscando algo"
self.addEventListener('fetch', (event) => {
    console.log("Buscando algo...", event)
    // armazenar em cache (arquivos estáticos pré-carregados) todas as requisições
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response

                } else {
                    return fetch(event.request)
                }
            })
    )
})