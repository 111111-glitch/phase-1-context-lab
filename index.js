/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// helpers.js

// Create employee record
function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  // Create employee records from array of arrays
  function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
  }
  
  // Create timeIn event
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10),
    });
    return this;
  }
  
  // Create timeOut event
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10),
    });
    return this;
  }
  
  // Calculate hours worked on a specific date
  function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find((event) => event.date === date);
    const timeOut = this.timeOutEvents.find((event) => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  // Calculate wages earned on a specific date
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  }
  
  // Calculate all wages for an employee
  function allWagesFor() {
    const dates = this.timeInEvents.map((event) => event.date);
    return dates.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
  }
  
  // Calculate all wages for all employees
  function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total + allWagesFor.call(employee), 0);
  }
  
  // Find employee by first name in a collection
  function findEmployeeByFirstName(collection, firstName) {
    return collection.find((employee) => employee.firstName === firstName);
  }
  
  module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    calculatePayroll,
    findEmployeeByFirstName,
  };
  
