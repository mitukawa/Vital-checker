
var r = 18;
var p = 90;
function output_val(val_p, val_r){

    // val_r=0
    // val_r=30

    document.getElementById("r_rate_val").innerHTML = String(val_r);
    document.getElementById("p_rate_val").innerHTML = String(val_p);

    if(val_p<60){
        document.getElementById("state_p_col").style.backgroundColor = "lightblue";
        document.getElementById("state_p_val").innerHTML = "Slow";
    }else if(val_p>100){
        document.getElementById("state_p_col").style.backgroundColor = "lightcoral";
        document.getElementById("state_p_val").innerHTML = "Fast";
    }else{
        document.getElementById("state_p_col").style.backgroundColor = "lightgreen";
        document.getElementById("state_p_val").innerHTML = "Normal";
    }

    if (val_r < 15) {
        document.getElementById("state_r_col").style.backgroundColor = "lightblue";
        document.getElementById("state_r_val").innerHTML = "Slow";
    } else if (val_r > 20) {
        document.getElementById("state_r_col").style.backgroundColor = "lightcoral";
        document.getElementById("state_r_val").innerHTML = "Fast";
    } else {
        document.getElementById("state_r_col").style.backgroundColor = "lightgreen";
        document.getElementById("state_r_val").innerHTML = "Normal";
    }
}

function reset_val(){
    document.getElementById("r_rate_val").innerHTML = "--";
    document.getElementById("p_rate_val").innerHTML = "--";

    document.getElementById("state_p_col").style.backgroundColor = "";
    document.getElementById("state_p_val").innerHTML = " ";
    document.getElementById("state_r_col").style.backgroundColor = "";
    document.getElementById("state_r_val").innerHTML = " ";
}



       

// // rec_flag → 0停止 1録音 2一時停止
// var rec_flag = false;
//     document.getElementById("rec-button").onclick = function () {


//     if (!rec_flag) {
//         rec_flag = true;
//         myStart = new Date();	// スタート時間を退避
//         document.getElementById("rec-button").innerHTML = "<i class=\"fas fa-pause fa-3x \"></i>";
//         document.getElementById("rec-label").innerHTML = "<i class=\"fas fa-circle\"></i>";
//         // document.getElementById("rec-time").innerHTML = "00:00" ;
//         myInterval = setInterval("myDisp()", 1);
//         navigator.getUserMedia({
//             audio: true,
//             video: false
//         }, successFunc, errorFunc);

//     }else{
//         rec_flag = false;
//         document.getElementById("rec-label").innerHTML = "";
//         document.getElementById("rec-button").innerHTML = "<i class=\"fas fa-microphone fa-3x \"></i>";
//         // document.getElementById("rec-time").innerHTML = "";
//         clearInterval(myInterval);
        
//     };
// };



// myButton = 0;	// [Start]/[Stop]のフラグ
// function myCheck() {
//     if (myButton == 0) {	// Startボタンを押した
//         myStart = new Date();	// スタート時間を退避
//         myButton = 1;
//         document.myForm.myFormButton.value = "Stop!";
//     } else {	// Stopボタンを押した
//         myDisp();
//         myButton = 0;
//         document.myForm.myFormButton.value = "Start";
//         clearInterval(myInterval);
//     }
// }
// function myDisp() {
//     myStop = new Date();	// 経過時間を退避
//     myTime = myStop.getTime() - myStart.getTime();	// 通算ミリ秒計算
//     myH = Math.floor(myTime / (60 * 60 * 1000));	// '時間'取得
//     myTime = myTime - (myH * 60 * 60 * 1000);
//     myM = Math.floor(myTime / (60 * 1000));	// '分'取得
//     myTime = myTime - (myM * 60 * 1000);
//     myS = Math.floor(myTime / 1000);	// '秒'取得
//     myMS = myTime % 1000;	// 'ミリ秒'取得
//     document.getElementById("rec-time").innerHTML = myH + ":" + myM + ":" + myS ;
// }


