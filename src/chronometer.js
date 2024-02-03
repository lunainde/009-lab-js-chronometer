class Chronometer {
  constructor() {
    // currentTime, with the initial value set to 0.
    this.currentTime = 0;
    this.intervalId = null;

    // intervalId, with the initial value set to null.
  }

  start(printTimeCallback) {
    // ... your code goes here
    // should increment by 1 the currentTime property every 1 second
    this.intervalId = setInterval(() => {
            this.currentTime += 1;
    // should invoke the passed printTimeCallback every 1 second
            if(printTimeCallback){
              printTimeCallback(this.currentTime);
            }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    // let count = this.currentTime /60
    // let minuteCount = Math.floor(count)
    // return minuteCount

    return Math.floor(this.currentTime /60);
  }

  getSeconds() {
    
    return this.currentTime % 60 
  }

  computeTwoDigitNumber(value) {

    let result = value.toString()
    if(result.length < 2){
      result = "0" + result.slice(0,1)
    }
    return result
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
   
    let secondeSplit = this.getSeconds().toString()
    let minuteSplit = this.getMinutes().toString()


  if(secondeSplit.length < 2){
    secondeSplit = "0" + secondeSplit.slice(0,1)
    }
    if(minuteSplit.length < 2){
      minuteSplit = "0" + minuteSplit.slice(0,1)
    }

    return `${minuteSplit}:${secondeSplit}`

  }
}
