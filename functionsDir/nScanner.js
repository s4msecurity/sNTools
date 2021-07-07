
const nmap = require("node-nmap")
nmap.nmapLocation = "nmap"


function QuickScript(urlAdress, scanType) {

    let quickscan = new nmap.QuickScan("127.0.0.1 " + urlAdress)
    quickscan.on("complete", function (data) {
        console.log(data)
    })
    quickscan.on("error", function (error) {
        console.log(error)
    })
    quickscan.startScan()
}

function OsAndPortScript(urlAdress, scanType) {

    let quickscan = new nmap.OsAndPortScan("127.0.0.1 " + urlAdress)
    quickscan.on("complete", function (data) {
        console.log(data)
    })
    quickscan.on("error", function (error) {
        console.log(error)
    })
    quickscan.startScan()
}


function specialcanner(urlAdress, scanType, parameter) {

    let quickscan = new nmap.NmapScan("127.0.0.1 " + urlAdress, parameter)
    quickscan.on("complete", function (data) {
        console.log(data)
    })
    quickscan.on("error", function (error) {
        console.log(error)
    })
    quickscan.startScan()

}


module.exports.momNFunction = function (urlAdress, scanType, parameter) {

    switch (scanType) {
        case "T":
            QuickScript(urlAdress, scanType);
        case "O":
            OsAndPortScript(urlAdress, scanType);
        case "S":
            specialcanner(urlAdress, scanType, parameter);
            break;
    }

}
