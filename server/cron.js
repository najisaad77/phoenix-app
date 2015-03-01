// // Remove all messages that are older than 90 days

// var onceEveryMonth = new Cron(function() {
//     var timestamp = moment().format() - (90 * 24 * 60 * 60 * 1000); // day, hour, min, sec, msec
//     var age = Messages.find({}, {fields: {dateCreated: 1, _id: 0}).dateCreated;

//     if(timestamp > age) {
//     	Messages.remove
//     }
// 	}, {
//     minute: 0,
//     hour: 12,
//     day: 13
// });