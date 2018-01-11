/**
 * Created by minchangjang on 2017. 4. 27..
 */
// 모듈을 추출합니다.
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var items = {
    "data" : [
        {
            "id": 1,
            "name": "Super Tires",
            "description": "These tires are the very best",
            "inStock": 5,
            "price": 50000,
            "image": "/images/tires.jpg",
            "featured": false,
            "quantity" : 0
        },
        {
            "id": 2,
            "name": "Reinforced Shocks",
            "description": "Shocks made from kryptonite",
            "inStock": 4,
            "price": 150000,
            "image": "/images/shocks.jpg",
            "featured": true,
            "quantity" : 0
        },
        {
            "id": 3,
            "name": "Padded Seats",
            "description": "Super soft seats for a smooth ride",
            "inStock": 0,
            "price": 240000,
            "image": "/images/seats.jpg",
            "featured": false,
            "quantity" : 0
        }
    ]
}

// 웹 서버를 생성합니다.
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.all('/data.json', function (request, response) {
    console.log(items);
    response.setHeader('Access-Control-Allow-Origin','*');
    //response.send(JSON.stringify(items));
    response.send(items);
});


app.all('/parameter/:id', function (request, response) {
    response.setHeader('Access-Control-Allow-Origin','*');

    // 변수를 선언합니다.
    //var id = request.param('id');
    var id = request.params.id;

    // 응답합니다.
    response.send('' + id + '');
});

app.get('/products', function (request, response) {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send(items);
});

app.get('/products/:id', function (request, response) {
    response.setHeader('Access-Control-Allow-Origin','*');

    // 변수를 선언합니다.
    //var id = Number(request.param('id'));
    var id = Number(request.params.id);

    if (isNaN(id)) {
        // 오류: 잘못된 경로
        response.send({
            error: '숫자를 입력하세요!'
        });
    } else if (items[id]) {
        // 정상
        response.send(items[id]);
    } else {
        // 오류: 요소가 없을 경우
        response.send({
            error: '존재하지 않는 데이터입니다!'
        });
    }
});

app.post('/products', function (request, response) {
    response.setHeader('Access-Control-Allow-Origin','*');

    // 변수를 선언합니다.
    var name = request.body.name;
    var price = request.body.price;
    var item = {
        name: name,
        price: price
    };

    // 데이터를 추가합니다.
    items.push(item);

    // 응답합니다.
    response.send({
        message: '데이터를 추가했습니다.',
        data: item
    });
});

app.put('/products/:id', function (request, response) {
    response.setHeader('Access-Control-Allow-Origin','*');
    // 변수를 선언합니다.
    var id = Number(request.params.id);
    var name = request.body.name;
    var price = request.body.price;

    if (items[id]) {
        // 데이터를 수정합니다.
        if (name) { items[id].name = name; }
        if (price) { items[id].price = price; }

        // 응답합니다.
        response.send({
            message: '데이터를 수정했습니다.',
            data: items[id]
        });
    } else {
        // 오류: 요소가 없을 경우
        response.send({
            error: '존재하지 않는 데이터입니다!'
        });
    }
});

app.delete('/products/:id', function (request, response) {
    response.setHeader('Access-Control-Allow-Origin','*');
    // 변수를 선언합니다.
    var id = Number(request.params.id);

    if (isNaN(id)) {
        // 오류: 잘못된 경로
        response.send({
            error: '숫자를 입력하세요!'
        });
    } else if (items[id]) {
        // 정상: 데이터 삭제
        items.splice(id, 1);
        response.send({
            message: '데이터를 삭제했습니다.'
        });
    } else {
        // 오류: 요소가 없을 경우
        response.send({
            error: '존재하지 않는 데이터입니다!'
        });
    }
});

// 웹 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
