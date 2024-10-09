document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;

    const appointment = { name, doctor, date };

    // Replace with your backend API endpoint
    fetch('/api/book-appointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointment)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('confirmation').innerText = `Appointment booked with ${data.doctor} on ${data.date}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('confirmation').innerText = 'Error booking appointment. Please try again.';
    });
});
