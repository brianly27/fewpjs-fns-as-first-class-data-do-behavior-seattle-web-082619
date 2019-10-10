/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let timeArray = time.split(":")
  timeArray[1] = parseInt(timeArray[1])
  timeArray[0] = parseInt(timeArray[0])
  // timeInt = timeArray.join(":")
  if (timeArray[0] < 12)
    return 'Good Morning'
  else if (timeArray[0] >= 12 && timeArray[0] < 17)
    return 'Good Afternoon'
  else
    return 'Good Evening'
}


/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}
