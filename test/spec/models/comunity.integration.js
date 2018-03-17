import {expect} from "chai";
import {sequelize} from "../../../app/src/models/index";
import {models} from "../../../app/src/models/index";
import * as moment from "moment";

describe("[Integration] 커뮤니티 모델을 테스트 한다.", () => {
    const Comunity = models.Comunity;
    moment.locale("ko-KR");

    const cleanUp = (cb) => comunity.destroy({where: {}, truncate: true}).then(() => cb());

    before((done) => {
        sequelize.sync().then(() => {
            done();
        }).catch((error) => {
            done(error);
        });
    });


    it("커뮤니티 목록이 리턴된다.", (done) => {
        // given
        // when
        Comunity.findAll().then((comunity) => {
            expect(comunity).to.be.length(2);

        });
    });

});