document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append('ipaFile', document.getElementById('ipaFile').files[0]);
    formData.append('p12File', document.getElementById('p12File').files[0]);
    formData.append('mobileprovisionFile', document.getElementById('mobileprovisionFile').files[0]);

    fetch('/sign', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('result').innerHTML = `<a href="${data.downloadLink}" download>Download Signed App</a>`;
        } else {
            document.getElementById('result').innerText = data.error;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
