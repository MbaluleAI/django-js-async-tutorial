// The endpoint URL where your Django server is running
const API_URL = 'http://127.0.0.1:8000/api/data/';

/**
 * Fetches data asynchronously from the Django backend.
 * Utilizes try/catch blocks for clean, production-grade error handling.
 */
async function fetchApiData() {
    const statusElement = document.getElementById('status-message');
    const contentElement = document.getElementById('api-content');

    try {
        statusElement.innerText = "Connecting to Django backend...";
        
        // Await the asynchronous network response from Django
        const response = await fetch(API_URL);
        
        // Safety check: handle bad HTTP response codes (e.g., 404, 500)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Await parsing the raw stream into a readable JavaScript Object
        const data = await response.json();
        
        // Update our UI elements dynamically with the server data
        statusElement.innerText = "Data loaded successfully!";
        statusElement.style.color = "green";
        contentElement.innerHTML = `
            <strong>Server Message:</strong> ${data.message} <br>
            <strong>Status:</strong> ${data.status} <br>
            <strong>Source:</strong> ${data.data_origin}
        `;
        
        console.log('API Response object successfully processed:', data);

    } catch (error) {
        // Catch and handle runtime exceptions or network failures cleanly
        statusElement.innerText = "Failed to connect to backend.";
        statusElement.style.color = "red";
        contentElement.innerText = `Error details: ${error.message}`;
        
        console.error('API Fetch operational failure:', error);
    }
}

// Fire off the asynchronous action loop as soon as the DOM finishes rendering
document.addEventListener('DOMContentLoaded', fetchApiData);
