
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
const ECHP_address = '0xCe2643C6180e857BcE12B850cC5e89FC3B34fF0F';
const ECHP_address_abi = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldRouter","type":"address"},{"indexed":false,"internalType":"address","name":"newRouter","type":"address"}],"name":"UpdatedRouter","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"blacklistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWalletAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferRfi","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"rescueAnyECH20Tokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"weiAmount","type":"uint256"}],"name":"rescueECH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rfi","type":"uint256"},{"internalType":"uint256","name":"_marketing","type":"uint256"},{"internalType":"uint256","name":"_liquidity","type":"uint256"},{"internalType":"uint256","name":"_burn","type":"uint256"}],"name":"setTaxes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tax","type":"uint256"}],"name":"setTeamTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"taxes","outputs":[{"internalType":"uint256","name":"rfi","type":"uint256"},{"internalType":"uint256","name":"marketing","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"burn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totFeesPaid","outputs":[{"internalType":"uint256","name":"rfi","type":"uint256"},{"internalType":"uint256","name":"marketing","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"burn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateMaxTxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateMaxWalletBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRouter","type":"address"},{"internalType":"address","name":"newPair","type":"address"}],"name":"updateRouterAndPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"updateSwapEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateSwapTokensAtAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newWallet","type":"address"}],"name":"updatemarketingWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"whitelistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
const ECHP_Contract = new web3Instance.eth.Contract(ECHP_address_abi, ECHP_address);

const CLICK_address = '0x75eD5e70DAb192C93d577efc16Ee542f9577CA52';
const CLICK_address_abi = click_abi;
const CLICK_Contract = new web3Instance.eth.Contract(CLICK_address_abi, CLICK_address);


const ECHPUNKS_NFT2_address = '0x59b62377D9ba3f4fB4F4df8Ec2b771984CEaf86c';
const ECHPUNKS_NFT2_address_abi = abi2;
const ECHPUNKS_NFT2_Contract = new web3Instance.eth.Contract(ECHPUNKS_NFT2_address_abi, ECHPUNKS_NFT2_address);

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
    if (stringNetworkId !== "5") {}
    if (stringNetworkId === "5") {
        if (typeof(networkId) === typeof(0)) {} else {}
        document.getElementById("enableMeta").hidden = false
    }
});

async function getNetworkId() {
    const network = await web3Instance.eth.net.getId()
    const stringNetworkId = network.toString()
    if (stringNetworkId !== "3000") {} // 5
    if (stringNetworkId === "3000") { // 5
        if (typeof(networkId) === typeof(0)) {} else {}
    }
}


const ethereumButton = document.querySelector('.enableEthereumButton');

ethereumButton.addEventListener('click', () => {
    document.getElementById('enableMeta').hidden = true
    document.getElementById('connect_user').hidden = true
    document.getElementById('click_button_section').hidden = false
    // console.log("getting account")
    getAccount()
})

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

let currentAccount = ""

// get data for connected wallet
async function getAccount() {
    const network = await web3Instance.eth.net.getId()
    // console.log(network)
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = accounts[0]
    // console.log('account: ', account)
    currentAccount = account
    // console.log('currentAccount: ', currentAccount)

    const balance = await window.ethereum
    .request({
        method: 'eth_getBalance',
        params: [account, "latest"]
    })

    const read = parseInt(balance) / 10 ** 18

    // fetch contract data
    let _ECHP_Balance, _clicksByAddress, _scores, _timeLeft, _timeLeftUntilNextClick;
    _ECHP_Balance = promisify(ECHP_Balance_ => ECHP_Contract.methods.balanceOf(currentAccount).call(ECHP_Balance_))
    _clicksByAddress = promisify(clicksByAddress_ => CLICK_Contract.methods.returnPlayer(currentAccount).call(clicksByAddress_))
    _scores = promisify(scores_ => CLICK_Contract.methods.sortByClicks().call(scores_))
    _timeLeft = promisify(timeLeft_ => CLICK_Contract.methods.gameEndTime().call(timeLeft_))
    _timeLeftUntilNextClick = promisify(timeLeftUntilNextClick_ => CLICK_Contract.methods.coolDownByPlayer(currentAccount).call(timeLeftUntilNextClick_))

    Promise.all([_ECHP_Balance, _clicksByAddress, _scores, _timeLeft, _timeLeftUntilNextClick])
        .then(function ([ECHP_Balance, clicksByAddress, scores, timeLeft, timeLeftUntilNextClick]) {
        // console.log(timeLeftUntilNextClick)
        // console.log(scores, "scores")
        // console.log(clicksByAddress.clicks_)
        console.log("getting account")
        if (timer == 0) {
            timeLeftInGame(timeLeft)
        }

        if (clicksByAddress.clicks_ != 0) {
            document.getElementById("time_until_p").hidden = true
        }

        timeLeftForPlayer(timeLeftUntilNextClick)

        $("#score_table_body tr").remove(); 

        for (i = 0; i < scores.length; i++) {
        
            var table = document.getElementById("score_table_body");
            var row = table.insertRow(-1);

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            if (scores[i].player.toUpperCase() == currentAccount.toUpperCase()) {
                cell1.style.backgroundColor = "darkgreen";
                cell2.style.backgroundColor = "darkgreen";
                cell3.style.backgroundColor = "darkgreen";
                cell2.innerHTML = "<a target='_blank' href='https://scout.ech.network/address/" + scores[i].player +"/transactions'>" + scores[i].player.match(/.{1,9}/g)[0] + "..(me)</a>";
            } else {
                cell2.innerHTML = "<a target='_blank' href='https://scout.ech.network/address/" + scores[i].player + "/transactions'>" + scores[i].player.match(/.{1,9}/g)[0] + "..</a>";
            }
            cell1.innerHTML = i + 1;
            cell3.innerHTML = scores[i].clicks;
        }
        const readECHPBalance = parseInt(ECHP_Balance) / 10 ** 9
        document.getElementById('ECHP_Balance').innerHTML = "<p>My ECHP Balance<br>" + readECHPBalance + "</p>"
    })

    showAccount.innerHTML = "<p>My Wallet:<br>" + account.match(/.{1,9}/g)[0] + "...</p>"

    if (network === 3000) { // rinkeby=4  ech=3000
        showBalance.innerHTML = "<p>My ECH Balance:<br>" + read.toFixed(5) + "</p>"
        return currentAccount;
    } else {
        loadDataButton.innerHTML = "Switch to Echelon Network and Try Again"
    }
}


function clickButton() {
    // console.log("click")
    document.getElementById("click_button").disabled = true
    document.getElementById("can_click_now").innerHTML = "Processing click.."
    CLICK_Contract.methods.click().send({ from: currentAccount }).on('transactionHash', tx => {

    }).then(receipt => {
        if (receipt.status == '0x1' || receipt.status == 1) {
            document.getElementById("can_click_now").innerHTML = "You clicked!"
            console.log('Transaction Successful')
            console.log(receipt)
            setTimeout(() => {
                getAccount()
            }, "1000")
        } else {

        }
    }).catch(err => {
        console.log(err)
        document.getElementById("click_button").disabled = false
        document.getElementById("can_click_now").innerHTML = "Click canceled"
        setTimeout(() => {
            document.getElementById("can_click_now").innerHTML = "You can click now!"
        }, "1000")
    }).finally(() => {
        return
    })
}

let timer = 0;

function timeLeftInGame(time) {
    setTimeout(() => {
        if (time != 0) {
            timer = parseFloat(time)
        }
        timer--
        document.getElementById("time_left_in_game").innerHTML = timer
        timeLeftInGame(timer)
    }, "1000")
}

let playerTimer = 0;

function timeLeftForPlayer(time) {
    setTimeout(() => {
        const clickButton = document.getElementById("click_button");
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

let canRefresh = true;

function refreshTop() {
    const refreshButton = document.getElementById("refresh_button");
    refreshButton.disabled = true
    refreshButton.classList.remove("btn-primary");
    refreshButton.classList.add("btn-secondary")
    getAccount()
    canRefresh = false;
    setTimeout(() => {
        refreshButton.disabled = false
        refreshButton.classList.remove("btn-secondary");
        refreshButton.classList.add("btn-primary")
        canRefresh = true; 
    }, "60000")
}