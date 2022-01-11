
function downTest(){
	console.log("Download_Test")
 
    let worker = new Worker("js/down.js");
    let start = performance.now()
    worker.postMessage({
        cmd: "start",
    })
    
    worker.onmessage = function (ev) {
        if (ev.data === null) {
          console.log("ev.data Null")
          return
        }
    }

    setTimeout(function () {
    console.log('In down setTimeout')
        //https://randomuser.me/api/
    fetch("https://monitor.uac.bj:4450/getDownSpeed").then(response => response.text()).then(data=>{
        console.log(data+" Mbps")
    });
    worker.terminate()
    }, 13000);
}

function upTest(){
    let worker = new  Worker("js/up.js")
    worker.postMessage({
        cmd: "start",
    })
    worker.onmessage = function(ev){
        if (ev.data === null) {
          console.log("Data null")
          return
        }
        console.log(ev.data)
    }

    setTimeout(function(){
        worker.terminate()
    },30000)
    console.log('Papa')
}





