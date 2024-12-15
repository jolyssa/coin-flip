document.querySelector('a').addEventListener('click', flipCoin)

async function flipCoin() {

    try {
        const res = await fetch('http://localhost:5454/flip') // Adjust the URL when server is deployed
        let data = await res.json()
        let result = data.result // Get the result from the server's response

        // Updating the text for client
        const msg = `You got ${result}!`
        document.querySelector('h3').innerText = msg

        // Updating img for client
        const coinImage = document.querySelector('#coin-image');
        coinImage.src = `/img/${result}.png`; // Use the result to determine the image
        coinImage.alt = result; // Accessibility

    } catch (err) {
        console.error('Error fetching the coin flip result:', err)
    }
}