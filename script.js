let pNum;
let msg;
let fNum;
let url;
let apiKey = '';
let senderID = '';
let notifyID = '';

let numField = document.getElementById('inpNum');
let msgField = document.getElementById('inpMsg');

function sendSMS() {
  pNum = numField.value;
  msg = msgField.value;

  if (pNum.length < 9) {
    alert('Numbers missing. Please check');
  } else if (pNum.length == 9 && pNum.slice(0, 1) == 7) {
    fNum = '94' + pNum;
  } else if (pNum.length == 10 && pNum.slice(0, 1) == 0) {
    fNum = '94' + pNum.slice(1, 10);
  } else if (pNum.length == 11 && pNum.slice(0, 2) == 94) {
    fNum = pNum;
  } else {
    alert('invalid number');
  }

  url =
    'https://app.notify.lk/api/v1/send?user_id=' +
    notifyID +
    '&api_key=' +
    apiKey +
    '&sender_id=' +
    senderID +
    '&to=' +
    fNum +
    '&message=' +
    msg;

  fetch(url)
    .then((res) => alert('Message has been sent'))
    .catch((err) => alert('Failed'));

  numField.value = '';
  msgField.value = '';
}
