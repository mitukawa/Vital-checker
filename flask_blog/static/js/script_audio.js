var id;
var counter = 0;
var rec_button = document.getElementById("rec-button");
var stop_button = document.getElementById("stop-button");
var upload;
// 録音したデータをサーバーにアップロードする関数
// 入力：音声（Blob）
function upload_wav(blob) {
    var fd = new FormData();
    fd.append('rec_data', blob);
    $.ajax({
        type: 'POST',
        url: '/voice_analysis',
        data: fd,
        processData: false,
        contentType: false
    }).done(function (data) {
        console.log(data);
        var val_p = p+Math.floor(Math.random() * 3) + -1;
        var val_r = r+Math.floor(Math.random() * 3) + -1;
        output_val(val_p, val_r);
    });
}

stop_button.disabled = true;
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia supported.');

    // constraints - only audio needed for this app
    navigator.mediaDevices.getUserMedia({ audio: true });

    const constraints = { audio: true };
    let chunks = [];


    let onSuccess = function (stream) {
        const mediaRecorder = new MediaRecorder(stream);


        //15秒おきに録音したデータをサーバーにアップロード
        rec_button.onclick = function () {
            $("#rec_icon").toggleClass("fas fa-record-vinyl size");
            rec_button.disabled = true;
            stop_button.disabled = false;
            mediaRecorder.start();
            upload = true;
            console.log(mediaRecorder.state);
            console.log('recorder started');

            id = setInterval(function () {

                mediaRecorder.stop();
                console.log(mediaRecorder.state);
                console.log('recorder stoped');

                mediaRecorder.start();
                console.log(mediaRecorder.state);
                console.log('recorder started');

            }, 6000);
        }


        stop_button.onclick = function (e) {
            upload = false;
            mediaRecorder.stop();
            $("#rec_icon").toggleClass("fas fa-record-vinyl size");
            clearTimeout(id);
            alert("Recording finished")

            reset_val();

            rec_button.disabled = false;
            stop_button.disabled = true;
        }

        mediaRecorder.onstop = function(e, resset=true){
            console.log("data available after MediaRecorder.stop() called.");

            // 音声データを送信できる形式(Blob)に変換
            if (upload){
                const blob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' });
                chunks = [];
                upload_wav(blob);
                const audioURL = window.URL.createObjectURL(blob);
                document.getElementById("dl").href = audioURL;
                document.getElementById("dl").download = 'sample.wav';
                
                console.log("recorder stopped");
            }


        }
        mediaRecorder.ondataavailable = function (e) {
            chunks.push(e.data);
        }
    }


    let onError = function (err) {
        console.log('The following error occured: ' + err);
    }

    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

} else {
    console.log('getUserMedia not supported on your browser!');
}