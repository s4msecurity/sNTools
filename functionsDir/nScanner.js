
const nmap = require("node-nmap")
nmap.nmapLocation = "nmap"


function QuickScript(urlAdress, scanType) {

    var oap = new nmap.OsAndPortScan(urlAdress);

    oap.on("complete", function(data){
        console.log(data)
    })
    oap.on("error", function(error){
        console.log(error)
    })

}

function OsAndPortScript(urlAdress, scanType) {

    let quickscan = new nmap.OsAndPortScan(urlAdress);
    quickscan.on("complete", function (data) {
        console.log(data)
    })
    quickscan.on("error", function (error) {
        console.log(error)
    })
    quickscan.startScan()
}


function specialcanner(urlAdress, scanType, parameter) {

    let quickscan = new nmap.OsAndPortScan(urlAdress, parameter);
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
