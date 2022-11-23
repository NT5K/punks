
// Connect to metamask
const web3Instance = new Web3(window['ethereum']);

if (typeof window.ethereum !== 'undefined') {
    console.log('metamask is installed!')
} else {
    console.log('install metamask')
    document.querySelector('.enableEthereumButton').innerHTML = '<a target="_blank" href="https://www.metamask.io">Install Metamask</a>'
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// Contracts
const PLACE_address = '0xeBbdE95E2301ab09EcB8984A58Dd4e7ca09c6457';
const PLACE_address_abi = place_abi;
const PLACE_Contract = new web3Instance.eth.Contract(PLACE_address_abi, PLACE_address);
// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// Promisify
const promisify = (inner) => new Promise((resolve, reject) => inner((err, res) => {
    if (err) {
        reject(err)
    } else {
        resolve(res);
    }
}));

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// Accounts Changed
window.ethereum.on('accountsChanged', function (accounts) {
    getAccount()
})

window.ethereum.on('networkChanged', function (networkId) {
    console.log('networkChanged', networkId);
    const stringNetworkId = networkId.toString()
    if (stringNetworkId !== "3000") { }
    if (stringNetworkId === "3000") {
        if (typeof (networkId) === typeof (0)) { } else { }
        document.getElementById("enableMeta").hidden = false
    }
});

async function getNetworkId() {
    const network = await web3Instance.eth.net.getId()
    const stringNetworkId = network.toString()
    if (stringNetworkId !== "3000") { } // 3000
    if (stringNetworkId === "3000") { // 3000
        if (typeof (networkId) === typeof (0)) { } else { }
    }
}

const ethereumButton = document.querySelector('.enableEthereumButton');

ethereumButton.addEventListener('click', () => {
    document.getElementById('enableMeta').hidden = true
    getAccount()
})

let currentAccount = ""

async function getAccount() {
    const network = await web3Instance.eth.net.getId()
    // console.log(network)
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = accounts[0]
    currentAccount = account

    const balance = await window.ethereum
        .request({
            method: 'eth_getBalance',
            params: [account, "latest"]
        })
        const read = parseInt(balance) / 10 ** 18
   
    if (network === 5) {
        // console.log('connected to echelon')
    }
    // if (boardRowCount != 0) {
        getBoard(0)
    // } else {

    // }
}

let boardRowCount = 0
const getBoard = (rowNumber) => {
    let _rowOf50, _timeLeft
    _rowOf50 = promisify(rowOf50_ => PLACE_Contract.methods.fetchRow(rowNumber).call(rowOf50_))
    _timeLeft = promisify(timeLeft_ => PLACE_Contract.methods.playerCoolDown(currentAccount).call(timeLeft_))
    Promise.all([_rowOf50, _timeLeft])
        .then(function ([rowOf50, timeLeft]) {
            const rowColumn = document.createElement("div");
            rowColumn.className = 'col-12';
            rowColumn.className = 'text-center';
            const columnForButtons = document.createElement("div");
            columnForButtons.className = 'd-flex flex-row justify-content-center';

            for (i = 0; i < 50; i++) {
                const button = document.createElement("button");
                button.className = 'button pixel';

                const stringed = web3Instance.utils.hexToAscii(rowOf50[i])
                if (rowOf50[i] == "0x0000000000000000000000000000000000000000000000000000000000000000") {
                    button.style.backgroundColor = "#FFFFFF"
                } else {
                    button.style.backgroundColor = stringed.slice(0, 7)
                }

                button.id = (i+1) + 50 * rowNumber
                button.setAttribute("onclick", "returnButtonId(" + ((50 * rowNumber) + (i+1)) + ")")
                button.innerHTML = "&nbsp"
                columnForButtons.appendChild(button);

                if (i == 49) {
                    document.getElementById("rowOfButtons").appendChild(columnForButtons)
                }
            }
            boardRowCount++
            if (boardRowCount < 50) {
                getBoard(boardRowCount)
            }
            timeLeftForPlayer(timeLeft)
        })
}

// const color = web3Instance.utils.asciiToHex("#808080")
// const paddedColor = web3Instance.utils.padRight(color, 64)
// console.log(paddedColor, " color x")

let previousNumber = 0
let previousColor = ""
let numberToChange = 0
const returnButtonId = (number) => {
    document.getElementById("coordinate").innerHTML = number
    if (previousNumber != 0) {
        document.getElementById(previousNumber).style.backgroundColor = previousColor;
    }
    previousColor = document.getElementById(number).style.backgroundColor
    previousNumber = number
    numberToChange = number
    document.getElementById(number).style.backgroundColor = selectedColor;
}


let selectedColor = "#000000"
const changeSelectedColor = (colorNumber) => {
    if (colorNumber == "color1") {
        selectedColor = "#ff0000"
        document.getElementById("selected_color").innerHTML = "red"
    }
    if (colorNumber == "color2") {
        selectedColor = "#FFA500"
        document.getElementById("selected_color").innerHTML = "orange"
    }
    if (colorNumber == "color3") {
        selectedColor = "#FFFF00"
        document.getElementById("selected_color").innerHTML = "yellow"
    }
    if (colorNumber == "color4") {
        selectedColor = "#00FF00"
        document.getElementById("selected_color").innerHTML = "green"
    }
    if (colorNumber == "color5") {
        selectedColor = "#0000FF"
        document.getElementById("selected_color").innerHTML = "blue"
    }
    if (colorNumber == "color6") {
        selectedColor = "#4B0082"
        document.getElementById("selected_color").innerHTML = "indigo"
    }
    if (colorNumber == "color7") {
        selectedColor = "#7f00ff"
        document.getElementById("selected_color").innerHTML = "violet"
    }
    if (colorNumber == "color8") {
        selectedColor = "#FFFFFF"
        document.getElementById("selected_color").innerHTML = "white"
    }
    if (colorNumber == "color9") {
        selectedColor = "#000000"
        document.getElementById("selected_color").innerHTML = "black"
    }
    if (colorNumber == "color10") {
        selectedColor = "#808080"
        document.getElementById("selected_color").innerHTML = "grey"
    }

    var css = '.button:hover{ background-color: ' + selectedColor + ' !important}';
    var style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.textContent = ''
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style)
}

function placePixel() {
    document.getElementById("place_color_button").disabled = true
    document.getElementById("can_click_now").innerHTML = "Processing pixel.."
    const color = web3Instance.utils.asciiToHex(selectedColor)
    const paddedColor = web3Instance.utils.padRight(color, 64)
    // console.log(paddedColor, " color x")
    PLACE_Contract.methods.placePixel((numberToChange-1), paddedColor).send({ from: currentAccount }).on('transactionHash', tx => {

    }).then(receipt => {
        if (receipt.status == '0x1' || receipt.status == 1) {
            console.log("color placed")
        } else {

        }
    }).catch(err => {
        console.log(err)
        document.getElementById("place_color_button").disabled = false
        document.getElementById("can_click_now").innerHTML = "Pixel canceled"
        setTimeout(() => {
            document.getElementById("can_click_now").innerHTML = "You can click now!"
        }, "1000")
    }).finally(() => {
        return
    })
}

function getTimeOnly() {
    let _timeLeft
    _timeLeft = promisify(timeLeft_ => PLACE_Contract.methods.playerCoolDown(currentAccount).call(timeLeft_))
    Promise.all([_timeLeft])
        .then(function ([timeLeft]) {
            timeLeftForPlayer(timeLeft)
        })
}

let playerTimer = 0
function timeLeftForPlayer(time) {
    setTimeout(() => {
        const clickButton = document.getElementById("place_color_button");
        if (time != 0) {
            playerTimer = parseFloat(time)
            document.getElementById("can_click_now").hidden = true
            document.getElementById("can_click_now").innerHTML = "You can click now!"
            document.getElementById("time_until_p").hidden = false
            clickButton.disabled = true
            clickButton.classList.remove("btn-primary");
            clickButton.classList.add("btn-secondary")
        }
        if (time == 0) {
            document.getElementById("can_click_now").hidden = false
            document.getElementById("can_click_now").innerHTML = "You can click now!"
            document.getElementById("time_until_p").hidden = true
            clickButton.disabled = false
            clickButton.classList.remove("btn-secondary");
            clickButton.classList.add("btn-primary")
            return;
        }
        playerTimer--
        document.getElementById("time_until_next_click").innerHTML = playerTimer
        timeLeftForPlayer(playerTimer)
    }, "1000")
}

PLACE_Contract.events.PixelPlaced({ fromBlock: "latest" })
    .on("connected", function (subscriptionId) {
        console.log('callback')
        console.log(subscriptionId);
        return;
    })
    .on('data', function (event) {
        console.log(event, "subscription event");
        const { color, holder, location } = event.returnValues;
        // console.log((parseInt(location)+1).toString())
        // console.log(typeof(toString((parseInt(location) + 1))))
        document.getElementById((parseInt(location) + 1).toString()).style.backgroundColor = web3Instance.utils.hexToAscii(color).slice(0, 7)
        if (holder.toUpperCase() == currentAccount.toUpperCase()) {
            getTimeOnly()
        }
        if ((parseInt(location) + 1) == previousNumber && holder.toUpperCase() == currentAccount.toUpperCase()) {
            previousColor = web3Instance.utils.hexToAscii(color).slice(0, 7)
        }
        return
        // }
    })
    .on('changed', function (event) {
        console.log(event, "on changed")
    })
    .on('error', function (error, receipt) {
    });