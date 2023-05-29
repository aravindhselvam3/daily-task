
function countdown(seconds, callback) {
    if (seconds > 0) {
      console.log(seconds);
      setTimeout(() => {
        countdown(seconds - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  function completionCallback() {
    console.log("Happy Independence day");
  }
  
  countdown(10, completionCallback);
  
