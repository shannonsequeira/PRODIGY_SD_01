document.getElementById('convert-btn').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let results = '';

    if (isNaN(temperature)) {
        results = '<div class="alert alert-danger" role="alert">Please enter a valid temperature value.</div>';
    } else {
        if (unit === 'Celsius') {
            const fahrenheit = (temperature * 9/5) + 32;
            const kelvin = temperature + 273.15;
            results = `
                <div class="alert alert-success" role="alert">
                    ${temperature} °C = ${fahrenheit.toFixed(2)} °F❄️<br>
                    ${temperature} °C = ${kelvin.toFixed(2)} K🔥
                </div>`;
        } else if (unit === 'Fahrenheit') {
            const celsius = (temperature - 32) * 5/9;
            const kelvin = (temperature - 32) * 5/9 + 273.15;
            results = `
                <div class="alert alert-success" role="alert">
                    ${temperature} °F = ${celsius.toFixed(2)} °C🌡️<br>
                    ${temperature} °F = ${kelvin.toFixed(2)} K🔥
                </div>`;
        } else if (unit === 'Kelvin') {
            const celsius = temperature - 273.15;
            const fahrenheit = (temperature - 273.15) * 9/5 + 32;
            results = `
                <div class="alert alert-success" role="alert">
                    ${temperature} K = ${celsius.toFixed(2)} °C🌡️<br>
                    ${temperature} K = ${fahrenheit.toFixed(2)} °F❄️
                </div>`;
        }
    }

    document.getElementById('results').innerHTML = results;
});
