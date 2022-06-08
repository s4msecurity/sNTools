const scan = require("./functionsDir/nScanner");
const term = require("./functionsDir/nCommand");
const readline = require('readline-sync');


var urlAdress, scanType;


console.log(`

         888b    888 88888888888                888          
         8888b   888     888                    888          
         88888b  888     888                    888          
.d8888b  888Y88b 888     888   .d88b.   .d88b.  888 .d8888b  
88K      888 Y88b888     888  d88""88b d88""88b 888 88K      
"Y8888b. 888  Y88888     888  888  888 888  888 888 "Y8888b. 
     X88 888   Y8888     888  Y88..88P Y88..88P 888      X88 
 88888P' 888    Y888     888   "Y88P"   "Y88P"  888  88888P'                                                     
                                                    
Basic network scanner tools :) 
`);


function nodeMapStart() {
    urlAdress = readline.question(`Please input for url address or IP address[example: 192.168.0.1] \nIf you entered empty, another menu will appear: `);
    scanType = readline.question(`
__________________________________________________________________________________________________
|    Scanner Type: 
|    T  = Basic                      | Scans supplied hosts without portscan(-sP). Use for a quick discovery.
|    O  = OS                         | Scans for open ports as well as NMAP gathered OS information.
|    Q  = Queded                     | Queued version for greater control
|    S  = NScanner                   | Special Scannaer, manuel. Example input: [-sP -sV -A ]
|    UN = Network Local user list    | User found in network or If you entered empty, another menu will appear (Ex: DoS Ataack)
|    [example: T]: `)
    checkedStartType(scanType)
}


function cmdSet() {
    scanType = readline.question(`
__________________________________________________________________
|    Scanner Type: 
|    UL  = User list          | View users in the public network
|    AL  = Arp list           | View the ARP Table.
|    PL  = Ping Send          | Send ping
|    DD  = DDoS Attack        | DDoS Strees Testing
|    [example: UL]: `)
    inpCmd(scanType);
}


function inpCmd(inp) {
    if (inp == "PL") {
        if (urlAdress == null || urlAdress == undefined || urlAdress == "") {
            urlAdress = readline.question(`Please input for url address or IP address[example: 192.168.0.1]: `);
            term.nCommand(inp, urlAdress);
        } else {
            term.nCommand(inp, urlAdress);
        }
    }
    else if (inp == "DD") {
        if (urlAdress == null || urlAdress == undefined || urlAdress == "") {
            urlAdress = readline.question(`Please input for url address or IP address\n[example: (http or https)192.168.0.1:(port number) | http://192.168.0.1:80]: `);
            term.nCommand(inp, urlAdress);
        } else {
            term.nCommand(inp, urlAdress);
        }
    }
    else {
        term.nCommand(inp, "")
    }
}


function checkedStartType(inp) {
    if ((inp == null || inp == undefined || inp == "")) {
        console.log("PlePlease do not enter null value restarting. :| ", nodeMapStart());
    }
    else {
        if (inp == "S") {
            sParameters = readline.question("   \nEnter the special parameters to scan [Example: input like '-sP -A -sV...']: ");
            scan.momNFunction(urlAdress, inp, sParameters)
        }
        else if (inp != "UN") {
            scan.momNFunction(urlAdress, inp, "");
        }
        else if (inp == "UN") {
            cmdSet();
        }
        else {
            console.log("Programming exit.");
        }
    }
}
nodeMapStart();