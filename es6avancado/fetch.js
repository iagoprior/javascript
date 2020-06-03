fetch('http://localhost:8080/data.json')
  .then(responseStream => {
      console.log(responseStream);
      if (responseStream.status === 200) {
          responseStream.json()
        }
    })
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
