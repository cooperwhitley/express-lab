const thisWeekTasks = [
    {day: 'Monday', tasks: 'Express Intro Lab'},
    {day: 'Tuesday', tasks: 'Express Dev Skills Lab, Express WBP, Big O Notation, Outcomes Assignment'},
    {day: 'Wednesday', tasks: 'Doctors Appointment, Dev Skills Lab 2, Mix Notes'},
    {day: 'Thursday', tasks: 'Promises WBP, Recursion'},
    {day: 'Friday', tasks: 'Nothing!'},
    {day: 'Saturday', tasks: 'Work'},
    {day: 'Sunday', tasks: 'Work'}
];
module.exports = {
    getAll: function() {
        return thisWeekTasks;
    }
};