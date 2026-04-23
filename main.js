function getHeatIndex() {
    let temperature = Number(document.getElementById("degree").value);
    let humidity = Number(document.getElementById("humid").value);
    let HeatIndex = temperature + (0.33 * humidity) - 4;
    let status;

    if (HeatIndex <= 27) {
        status = "Comfortable / Cool";
    } else if (HeatIndex <= 32) {
        status = "Warm";
    } else if (HeatIndex <= 37) {
        status = "Hot";
    } else if (HeatIndex <= 41) {
        status = "Very Hot / Caution";
    } else {
        status = "Extreme Heat / Danger";
    }

    window.alert("The heat index is: " + HeatIndex + "°C | Status: " + status);
}