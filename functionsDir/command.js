
var os = require("os");
var { exec } = require("child_process");

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
        } else {
            console.log("Error parameters")
        }

    }
    else {
        console.log("Linux veya başka bir sistem.")
    }
}

