let watchId; // To keep track of the geolocation watch

if ("geolocation" in navigator) {
    // Initially, don't start watching for location updates
    watchId = null;

    document.getElementById("startButton").addEventListener("click", startWatching);
    document.getElementById("stopButton").addEventListener("click", stopWatching);
} else {
    alert("Geolocation is not available in this browser.");
}

function startWatching() {
  const options = {
      enableHighAccuracy: true, // Request high-accuracy tracking
    };

    if (!watchId) {
        watchId = navigator.geolocation.watchPosition(updateSpeed,handleGeoError,options);
    }
    
}

function stopWatching() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
    
}

function updateSpeed(position) {
    const speedElement = document.querySelector(".speed-digit");
    console.log(position);

    // Calculate speed using the position's speed property (in meters per second)
    const speed = Math.round((position.coords.speed || 0) * 3.6); // Convert to km/h and round

    // Convert speed to miles per hour
    // const speedMilesPerHour = Math.round(speedMetersPerSecond * 2.23694); // 1 m/s = 2.23694 mph

    speedElement.textContent = speed.toString(); // Display as a string without decimals
    // document.getElementById("unit").textContent="Km/hr";
}
function handleGeoError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert('Geolocation permission denied by user.');
      break;
    case error.POSITION_UNAVAILABLE:
      alert('Location information is unavailable.');
      break;
    case error.TIMEOUT:
      alert('The request to get location timed out.');
      break;
    default:
      alert('An unknown error occurred.');
  }
}