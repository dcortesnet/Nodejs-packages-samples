const cron = require('node-cron');

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});

cron.schedule('1,2,4,5 * * * *', () => {
  console.log('running every minute 1, 2, 4 and 5');
});

cron.schedule('*/2 * * * *', () => {
  console.log('running a task every two minutes');
});
