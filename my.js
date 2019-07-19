let Rec = function () {
    this.Xvalue = "X";
    this.Ovalue = "O";
    this.step = 0;
    this.arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    this.draw = function (indexI, indexJ) {
        let btn = document.getElementById("position" + indexI + indexJ);
        btn.innerHTML = this.Xvalue;
        this.step++;
        this.createArrMidle(indexI, indexJ, 1);
        if (this.step === 2) {
            btn.innerHTML = this.Ovalue;
            this.createArrMidle(indexI, indexJ, 2);
            this.step = 0;
        }
        gameBroad.winLoserChecked();
    };

    this.createArrMidle = function (indexI, indexJ, value) {
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[indexI][indexJ] = value;
        }
    }

};
let GameBroad = function () {
        this.rec = new Rec();
        this.arr = [];

        this.drawBroad = function () {
            for (let i = 0; i < 3; i++) {
                this.arr[i] = [];
                for (let j = 0; j < 3; j++) {
                    this.arr[i][j] = "<button onclick='gameBroad.rec.draw(" + i + "," + j + ")'><div id='position" + i + j + "'></div></button>";
                    console.log(this.arr[i][j]);
                    document.getElementById("rec").innerHTML += this.arr[i][j];
                }
                document.getElementById("rec").innerHTML += "<br>";
            }
            console.log(this.arr);
        };

        this.winLoserChecked = function () {
            let flat = 0;
            for (let i = 0; i < this.rec.arr.length; i++) {
                for (let j = 0; j < this.rec.arr[i].length; j++) {
                    flat += this.rec.arr[i][j];
                    console.log("flat: ");
                    if (flat === 3){
                        alert("X player win");
                    }
                }
            }
            console.log(this.rec.arr);
            console.log("Đã chạy xong hàm for");
        }
    }
;

let gameBroad = new GameBroad();
gameBroad.drawBroad();