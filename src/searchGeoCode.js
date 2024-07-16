document.getElementById('search-button').addEventListener('click', function() {
    var query = document.getElementById('search-input').value;
    if (query) {
        geocode(query);
    } else {
        alert('Please enter a location.');
    }
});

function geocode(query) {
    
    var apiKey = 'AIzaSyBMBhOhkCQTNAIIntag10-_wqX-Ym08e1s';
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(query)}&key=${apiKey}`;
                

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'OK') {
                var results = data.results;
                displayResults(results);
            } else {
                alert('Geocoding failed: ' + data.status);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// function displayResults(results) {
//     var resultsContainer = document.getElementById('results');
//     resultsContainer.innerHTML = '';

//     results.forEach(result => {
//         var p = document.createElement('p');
//         p.textContent = result.formatted_address;
//         resultsContainer.appendChild(p);
//     });
// }
