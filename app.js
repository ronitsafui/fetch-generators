function *pollForInfoFetch() {
  while (true) {
    yield fetch('/api/fetchInfo', {
      method: 'get'
    }).then(function (d) {
      var json = d.json();
      return json;
    });
  }
}

function runPolling(generator) {
  if (!generator) {
    generator = pollForInfoFetch();
  }

  var p = generator.next();
  p.value.then(function (d) {
    if (!d.status) {
      console.log('on running');
      console.log(d);
      runPolling(generator);
    }
    else {
      console.log('on success');
      console.log(d);
      document.getElementById('container').style.backgroundColor = 'green';
    }
  });
}

function reset() {
  document.getElementById('container').style.backgroundColor = 'red';
}
