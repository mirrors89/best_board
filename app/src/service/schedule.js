import cron from "cron";

const CronJob = cron.CronJob;
let job1;

class Schedule {
    constructor() {

    }

    // '* */5 * * * *' - runs every 5 minutes
    startJob1Scadule() {
        job1 = new CronJob("*/5 * * * * *", () => {
            console.log("TEST CronJob");
        });

        job1.start();
        console.log('job1 status', job1.running);
    }

    stopJob1Scadule() {
        job1.stop();
        console.log('job1 status', job1.running);

    }
}

export const schedule = new Schedule();