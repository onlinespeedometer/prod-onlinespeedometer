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
    if (!watchId) {
        watchId = navigator.geolocation.watchPosition(updateSpeed);
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
    const speedMilesPerHour = Math.round(speedMetersPerSecond * 2.23694); // 1 m/s = 2.23694 mph

    speedElement.textContent = speed.toString(); // Display as a string without decimals
    // document.getElementById("unit").textContent="Km/hr";
}
