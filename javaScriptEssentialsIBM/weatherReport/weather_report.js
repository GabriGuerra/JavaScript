function showweatherDetails(event) {
    event.preventDefault();
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiKey = '76e746058325abd636b0936e8b0f4afa';
    const apiUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`;


fetch(apiUrl)
.then(response => response.json())
.then(data => {
    const weatherInfo = document.getElementById('locationInfo');
    console.log(data);
    weatherInfo.innerHTML = `<h2>${data[0].name}</h2>
                            <p>lat: ${data[0].lat}</p>
                            <p>lon: ${data[0].lon}</p>
                            <p>country: ${data[0].country}</p>`;
})

.catch(error => {
    console.error('Error fetching location:', error);
    const weatherInfo = document.getElementById('locationInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch location. Please try again.</p>`;
  });



}       
document.getElementById('locationForm').addEventListener('submit',showweatherDetails );
