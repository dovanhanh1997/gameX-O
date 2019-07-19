let Rec = function () {
    this.Xvalue = "X";
    this.Ovalue = "O";
    this.step = 0;

    this.draw = function (indexI, indexJ) {
        let btn = document.getElementById("position" + indexI + indexJ);
        btn.innerHTML = this.Xvalue;
        this.step++;
        console.log("step: "+this.step);
        if(this.step ===2){
            btn.innerHTML = this.Ovalue;
            this.step = 0;
        }
        gameBroad.winLoserChecked();
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
        for (let i = 0; i < this.arr.length; i++) {
        }
    }
};

let gameBroad = new GameBroad();
gameBroad.drawBroad();