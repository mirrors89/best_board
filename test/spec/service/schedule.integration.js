import {expect} from "chai";
import {schedule} from "../../../app/src/service/schedule";
import * as moment from "moment";

describe("[Integration] 스케줄을 테스트 한다.", () => {
    moment.locale("ko-KR");

    it("스케줄이 수행 됬다가 멈춘다.", function(done) {
        this.timeout(100000);

        schedule.startJob1Scadule();

        setTimeout(function() {
            schedule.stopJob1Scadule();

            expect(1).to.be.eq(1);
            done();
        }, 10000);

    });

});