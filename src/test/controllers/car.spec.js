let car_controller = require('../../controllers/car');
let httpmock = require('node-mocks-http');

describe("01. updateCar", () => {
    it("success", () => {
        let req = httpmock.createRequest();
        let res = httpmock.createResponse();
        req.params.id = 123;
        req.body = {
            "title": "mycar",
            "brand": "bmw",
        };
        car_controller.updateCar(req, res);
    })
});