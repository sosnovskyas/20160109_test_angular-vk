sendStat = function (data) {
  $.ajax({
    url: 'http://ft.dev.hismith.ru/stat/create/',
    type: 'POST',
    data: 'query=' + data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    //beforeSend: function (xhr) {
    //  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.setRequestHeader('Accept', 'application/json');
    //},
    dataType: 'json',
    success: function (result) {
      //alert('сервер ответил: ', result);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      //alert('сервер ответил ОШИБКОЙ: ', xhr.status, ' \n', thrownError);
    }
  });

  /*var request = new XMLHttpRequest();
  var params = 'query=' + data;
  request.open('POST', 'http://ft.dev.hismith.ru/stat/create/', true);
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      alert('It worked!');
    }
  };
  request.setRequestHeader('Accept', 'application/json');
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send(params);*/
};
