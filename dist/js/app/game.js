
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
// const ECHP_address = '0x77323Df7CA856D33564BcF69A6cbDe017B94C9cb'; // goerli
const ECHP_address_abi = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldRouter","type":"address"},{"indexed":false,"internalType":"address","name":"newRouter","type":"address"}],"name":"UpdatedRouter","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"blacklistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWalletAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferRfi","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"rescueAnyECH20Tokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"weiAmount","type":"uint256"}],"name":"rescueECH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rfi","type":"uint256"},{"internalType":"uint256","name":"_marketing","type":"uint256"},{"internalType":"uint256","name":"_liquidity","type":"uint256"},{"internalType":"uint256","name":"_burn","type":"uint256"}],"name":"setTaxes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tax","type":"uint256"}],"name":"setTeamTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"taxes","outputs":[{"internalType":"uint256","name":"rfi","type":"uint256"},{"internalType":"uint256","name":"marketing","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"burn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totFeesPaid","outputs":[{"internalType":"uint256","name":"rfi","type":"uint256"},{"internalType":"uint256","name":"marketing","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"burn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateMaxTxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateMaxWalletBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRouter","type":"address"},{"internalType":"address","name":"newPair","type":"address"}],"name":"updateRouterAndPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"updateSwapEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateSwapTokensAtAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newWallet","type":"address"}],"name":"updatemarketingWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"whitelistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
const ECHP_Contract = new web3Instance.eth.Contract(ECHP_address_abi, ECHP_address);


// const ECHPUNKS_NFT_address = '0x8d7586418E81A6A3b0AA4C653C82e49b79505eBC'; // goerli 2
const ECHPUNKS_NFT_address = '0x7f11d149171711904f6c497A9ed0E8Bd4D895551';
const ECHPUNKS_NFT_address_abi = abi;
const ECHPUNKS_NFT_Contract = new web3Instance.eth.Contract(ECHPUNKS_NFT_address_abi, ECHPUNKS_NFT_address);

//rinkeby
const ECHPUNKS_NFT2_address = '0x59b62377D9ba3f4fB4F4df8Ec2b771984CEaf86c';
// const ECHPUNKS_NFT2_address = '0x8d7586418E81A6A3b0AA4C653C82e49b79505eBC'; // goerli 2
const ECHPUNKS_NFT2_address_abi = abi2;
const ECHPUNKS_NFT2_Contract = new web3Instance.eth.Contract(ECHPUNKS_NFT2_address_abi, ECHPUNKS_NFT2_address);

// const GAME_address = '0xF007704F8D166E3DE7a328163172440F3496EFD2'; // goerli
const GAME_address = '0xD1AA1cD79F8E0ea39b9E29f6d33702c35bc60F24'; 
const GAME_address_abi = game_abi;
const GAME_Contract = new web3Instance.eth.Contract(GAME_address_abi, GAME_address);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// Promisify
const promisify = (inner) => new Promise((resolve, reject) => inner((err, res) => {
    if (err) {
        reject(err)
    } else {
        resolve(res);
    }
}));

document.getElementById('hair_attack').checked = false;
document.getElementById('hair_defend').checked = false;
document.getElementById('eyes_attack').checked = false;
document.getElementById('eyes_defend').checked = false;
document.getElementById('nose_attack').checked = false;
document.getElementById('nose_defend').checked = false;
document.getElementById('nipple_attack').checked = false;
document.getElementById('nipple_defend').checked = false;

disableChecks()

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
    if (stringNetworkId !== "3000") {} // 3000
    if (stringNetworkId === "3000") { // 3000
        if (typeof(networkId) === typeof(0)) {} else {}
    }
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

const ethereumButton = document.querySelector('.enableEthereumButton');
// let totalSupplyForPrice = 0
// console.log('supply for price ' + typeof(totalSupplyForPrice))

ethereumButton.addEventListener('click', () => {
    document.getElementById('enableMeta').hidden = true
    // console.log('getting account')
    totalSupplies()
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
    let _ECHP_Balance, _isInGame, _isPlayerOwner;
    _ECHP_Balance = promisify(ECHP_Balance_ => ECHP_Contract.methods.balanceOf(currentAccount).call(ECHP_Balance_))
    _isInGame = promisify(isInGame_ => GAME_Contract.methods.gameByAddress(currentAccount).call(isInGame_))
    _isPlayerOwner = promisify(isPlayerOwner_ => GAME_Contract.methods.isPlayerOwner(currentAccount).call(isPlayerOwner_))

    Promise.all([_ECHP_Balance, _isInGame, _isPlayerOwner])
    .then(function ([ECHP_Balance, isInGame, isPlayerOwner]) {
        // console.log('is in game ',isInGame)
        const readECHPBalance = parseInt(ECHP_Balance) / 10 ** 9
        document.getElementById('ECHP_Balance').innerHTML = "<p>My ECHP Balance<br>" + readECHPBalance + "</p>"
        // console.log(isPlayerOwner)
        checkIfPlayerIsRegistered(currentAccount)
        if (isInGame != 0) {
                // console.log(isInGame)
                // document.getElementById('create_game').hidden = true
                // document.getElementById('join_game').hidden = true
                document.getElementById('in_game').hidden = false
                document.getElementById('pre_game').hidden = true
                myGameNumber = isInGame
                localStorage.setItem("myGameNumber", myGameNumber)
                updateLiveGame(myGameNumber)
        } else {
            // if (isPlayerOwner.toUpperCase() == currentAccount.toUpperCase()) {
            //     // document.getElementById('create_game').hidden = false
            //     // document.getElementById('join_game').hidden = false
                document.getElementById('in_game').hidden = true
                document.getElementById('pre_game').hidden = false
                myGameNumber = isInGame
                localStorage.setItem("myGameNumber", myGameNumber)
                // updateLiveGame(myGameNumber)
            //     document.getElementById('live_feed').innerHTML = "PLEASE JOIN A GAME"
            // } else {
            //     document.getElementById('live_feed').innerHTML = "MUST SET NFT BEFORE STARTING GAMES"
            //     document.getElementById('create_game').hidden = true
            //     document.getElementById('join_game').hidden = true
            // }
            // disableChecks()
        }
    })

    showAccount.innerHTML = "<p>My Wallet:<br>" + account.match(/.{1,15}/g)[0] + "...</p>"

    if (network === 3000) { // rinkeby=4  ech=3000
        showBalance.innerHTML = "<p>My ECH Balance:<br>" + read.toFixed(5) + "</p>"
        return currentAccount;
    } else {
        loadDataButton.innerHTML = "Switch to Rinkeby Network and Try Again"
    }
}

async function bestFetch(metadataNumber) {
    try {
        const first = await fetch('./../../assets/data/metadata/' + metadataNumber.toString());
        let json = await first.json();
        return json;
    } catch (e) {
        console.log('Error!', e);
    }
}

let counter = 0

function refreshAccount() {
    setTimeout(() => {
        counter++
        // console.log('refresh', counter)
        getAccount()
        return;
    }, "10000")
}

// console.log(Math.round((Math.floor(Math.random() * 100) + 1) / 1) * 1)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(getRandomInt(1,100000000000))
let myRandomNumber = 0
let myAttackArray = []
let myDefendArray = []
/// COMMIT
function getHashFromContract() {
    // document.getElementById('commit_button').disabled = true
    console.log(attackArray)
    const attacks = attackArray.toString()
    const defends = defendArray.toString()
    canEnable = false
    disableChecks()

    if (
        (attacks == [1,1,2,2].toString() ||
        attacks == [2,2,1,1].toString() ||
        attacks == [1,2,1,2].toString() ||
        attacks == [2,1,2,1].toString() ||
        attacks == [1,2,2,1].toString() ||
        attacks == [2,1,1,2].toString()) &&
        (defends == [1,1,2,2].toString() ||
        defends == [2,2,1,1].toString() ||
        defends == [1,2,1,2].toString() ||
        defends == [2,1,2,1].toString() ||
        defends == [1,2,2,1].toString() ||
        defends == [2,1,1,2].toString())
    ) {
        document.getElementById('commit_button').disabled = true
        document.getElementById('commit_error_message').hidden = true
        const randomNumber = getRandomInt(1,1000000000000)
        myRandomNumber = randomNumber
        myAttackArray = attackArray
        myDefendArray = defendArray
        // console.log(typeof(myAttackArray[0]))
        let _getHash
        _getHash = promisify(getHash_ => GAME_Contract.methods.getHash(attackArray,defendArray,myRandomNumber).call(getHash_))

        Promise.all([_getHash])
        .then(function ([getHash]) {
            // console.log(getHash)
            // document.getElementById('my_random_number').innerHTML = myRandomNumber

            localStorage.setItem("myGameNumber", myGameNumber)
            localStorage.setItem("myRandomNumber", myRandomNumber)
            localStorage.setItem("myAttackArray", JSON.stringify(myAttackArray))
            localStorage.setItem("myDefendArray", JSON.stringify(myDefendArray))
            localStorage.setItem("getHash", getHash[0])
            localStorage.setItem("block#forHash", getHash[1])
            // GAME_Contract.methods.commitVote(myGameNumber,getHash).send({from: currentAccount}).on('transactionHash', tx => {
            GAME_Contract.methods.commitVote(myGameNumber,getHash[0]).send({from: currentAccount}).on('transactionHash', tx => {

            }).then(receipt => {
                if (receipt.status == '0x1' || receipt.status == 1) {
                    // console.log('Transaction Successful')
                    document.getElementById('commit_button').hidden = true
                    document.getElementById('commit_button').disabled = false
                    canEnable = true
                }
            }).catch(err => {
                // console.log('Error', err)
                document.getElementById('commit_button').disabled = false
                canEnable = true
                enableChecks()
            }). finally(() => {
                // console.log('approve function finished, returning')
                return
            })
        })
    } else {
        document.getElementById('commit_error_message').hidden = false
        document.getElementById('commit_button').disabled = false
        canEnable = true
        enableChecks()
    }
}

let attackArray = [0,0,0,0]

function getAttackValue() {

    const checkBox1 = document.getElementById("hair_attack");
    const checkBox2 = document.getElementById("eyes_attack");
    const checkBox3 = document.getElementById("nose_attack");
    const checkBox4 = document.getElementById("nipple_attack");
    // console.log(checkBox1.checked)
    if (checkBox1.checked) {
        attackArray[0] = 2
    } else {
        attackArray[0] = 1
    }
    if (checkBox2.checked) {
        attackArray[1] = 2
    } else {
        attackArray[1] = 1
    }
    if (checkBox3.checked) {
        attackArray[2] = 2
    } else {
        attackArray[2] = 1
    }
    if (checkBox4.checked) {
        attackArray[3] = 2
    } else {
        attackArray[3] = 1
    }

    console.log(attackArray)

}
let defendArray = [0,0,0,0]

function getDefendValue() {

    const checkBox1 = document.getElementById("hair_defend");
    const checkBox2 = document.getElementById("eyes_defend");
    const checkBox3 = document.getElementById("nose_defend");
    const checkBox4 = document.getElementById("nipple_defend");
    // console.log(checkBox1.checked)
    if (checkBox1.checked) {
        defendArray[0] = 2
    } else {
        defendArray[0] = 1
    }
    if (checkBox2.checked) {
        defendArray[1] = 2
    } else {
        defendArray[1] = 1
    }
    if (checkBox3.checked) {
        defendArray[2] = 2
    } else {
        defendArray[2] = 1
    }
    if (checkBox4.checked) {
        defendArray[3] = 2
    } else {
        defendArray[3] = 1
    }

    console.log(defendArray)

}

let myGameNumber = 0
let testObject = []
function createGame() {
    document.getElementById('create_game').disabled = true;
    document.getElementById('join_game').disabled = true;
    const player2 = document.getElementById('player_2_address').value
    GAME_Contract.methods.createGame(player2).send({from: currentAccount, value: 1000000000000000000}).on('transactionHash', tx => {

    }).then(receipt => {
        if (receipt.status == '0x1' || receipt.status == 1) {
            // console.log('Transaction Successful')
            // document.getElementById('create_game').hidden = true;
            document.getElementById('create_game').disabled = false;
            document.getElementById('join_game').disabled = false;
            // console.log(receipt)
            testObject = receipt
            myGameNumber = testObject.events.GameCreated.returnValues.gameNumber
            localStorage.setItem("myGameNumber", myGameNumber)
            updateLiveGame(myGameNumber)
            document.getElementById('in_game').hidden = false
            document.getElementById('pre_game').hidden = true
        } else {
            // document.getElementById('approve_button_button').disabled = false;

        }
    }).catch(err => {
        // console.log('Error', err)
        document.getElementById('create_game').disabled = false;
        document.getElementById('join_game').disabled = false;
    }). finally(() => {
        console.log('created game')
        return
    })

}
function joinGame() {
    document.getElementById('join_game').disabled = true;
    document.getElementById('create_game').disabled = true;
    const gameNumber = document.getElementById('game_number').value
    GAME_Contract.methods.joinGame(gameNumber).send({from: currentAccount, value: 1000000000000000000}).on('transactionHash', tx => {

    }).then(receipt => {
        if (receipt.status == '0x1' || receipt.status == 1) {
            // console.log('Transaction Successful')
            document.getElementById('join_game').disabled = false;
            document.getElementById('create_game').disabled = false;
            // console.log(receipt)
            testObject = receipt
            myGameNumber = testObject.events.GameStarted.returnValues.gameNumber
            updateLiveGame(myGameNumber)
            document.getElementById('in_game').hidden = false
            document.getElementById('pre_game').hidden = true
        } else {
            // document.getElementById('approve_button_button').disabled = false;

        }
    }).catch(err => {
        // console.log('Error', err)
        document.getElementById('join_game').disabled = false;
        document.getElementById('create_game').disabled = false;
    }). finally(() => {
        console.log('joined game')
        return
    })

}

function getGameCount() {
    let _gameCount
        _gameCount = promisify(gameCount_ => GAME_Contract.methods.gameCount().call(gameCount_))

        Promise.all([_gameCount])
        .then(function ([gameCount]) {
            // console.log(gameCount)
            return;
        })
}

let gen1_totalSupply = 0
let gen2_totalSupply = 0

function totalSupplies() {
    let _gen1, _gen2
    _gen1 = promisify(gen1_ => ECHPUNKS_NFT_Contract.methods.totalSupply().call(gen1_))
    _gen2 = promisify(gen2_ => ECHPUNKS_NFT2_Contract.methods.totalSupply().call(gen2_))

    Promise.all([_gen1, _gen2])
    .then(function ([gen1, gen2]) {
        // console.log(gen1, gen2)
        gen1_totalSupply = parseInt(gen1)
        gen2_totalSupply = parseInt(gen2)
        return;
    })
}

function gameCountLoop() {
    setTimeout(() => {
        getGameCount()
        gameCountLoop()
        return
    }, 3000);
}
// gameCountLoop()

function disableChecks() {
    document.getElementById("hair_defend").disabled = true
    document.getElementById("eyes_defend").disabled = true
    document.getElementById("nose_defend").disabled = true
    document.getElementById("nipple_defend").disabled = true

    document.getElementById("hair_attack").disabled = true
    document.getElementById("eyes_attack").disabled = true
    document.getElementById("nose_attack").disabled = true
    document.getElementById("nipple_attack").disabled = true
}
let canEnable = true
function enableChecks() {
    if (canEnable == true) {
        document.getElementById("hair_defend").disabled = false
        document.getElementById("eyes_defend").disabled = false
        document.getElementById("nose_defend").disabled = false
        document.getElementById("nipple_defend").disabled = false

        document.getElementById("hair_attack").disabled = false
        document.getElementById("eyes_attack").disabled = false
        document.getElementById("nose_attack").disabled = false
        document.getElementById("nipple_attack").disabled = false
    }
}

let currentAttackAndDefends = {}
let currentGameStats = {}
let gameMove = 1
let imagesSet = false
function updateLiveGame(gameNumber) {
    document.getElementById('my_game_number').innerHTML = gameNumber
    setTimeout(() => {
        
        let _games, _gameMoves, _winner, _timestamp
            _games = promisify(games_ => GAME_Contract.methods.games(gameNumber).call(games_))
            _gameMoves = promisify(gameMoves_ => GAME_Contract.methods.getGameMoves(gameNumber).call(gameMoves_))
            _winner = promisify(winner_ => GAME_Contract.methods.gameWinner(gameNumber).call(winner_))
            _timestamp = promisify(timestamp_ => GAME_Contract.methods.getBlockTimestamp().call(timestamp_))

            Promise.all([_games,_gameMoves, _winner, _timestamp])
            .then(function ([games, gameMoves, winner, timestamp]) {
                // console.log(timestamp, "timestamp")
                // console.log(games.roundStartTime, "round start time")
                // console.log(timestamp - games.roundStartTime, "time until commit limit")
                // console.log(games.gameTurn)

                if (games.player2 != "0x0000000000000000000000000000000000000000") {
                    fetchImages(games.player1, games.player2)
                }

                if (gameNumber != 0) {
                    document.getElementById('p1_address').innerHTML = "<a href=''>" + games.player1.match(/.{1,10}/g)[0] + "...</a>"
                    document.getElementById('p2_address').innerHTML = "<a href=''>" + games.player2.match(/.{1,10}/g)[0] + "...</a>"
                } else {
                    document.getElementById('p1_address').innerHTML = "&nbsp;"
                    document.getElementById('p2_address').innerHTML = "&nbsp;"
                }

                if (games.gameTurn == 0 && games.gameIsLive == false) { // player 2 has not joined
                    document.getElementById('live_feed').innerHTML = "WAITING FOR PLAYER 2 TO JOIN"
                    document.getElementById('previous_round').innerHTML = 0
                    document.getElementById('cancel_game').hidden = false
                    updateLiveGame(myGameNumber)
                    return;
                    
                } else {
                    document.getElementById('cancel_game').hidden = true
                    document.getElementById('previous_round').innerHTML = games.gameTurn - 1
                }
                document.getElementById('current_round').innerHTML = games.gameTurn

                if (games.gameTurn % 2 == 0) {
                    if (games.gameTurn == 0) {
                        document.getElementById('current_attacker').innerHTML = "1"
                    } else {
                        document.getElementById('current_attacker').innerHTML = "2"
                    }
                } else {
                    document.getElementById('current_attacker').innerHTML = "1"
                }

                if (winner != "0x0000000000000000000000000000000000000000") {
                    document.getElementById('winner_div').hidden = false
                    if (winner.toUpperCase() == currentAccount.toUpperCase()) {
                        document.getElementById('withdraw_winner_button').hidden = false
                        document.getElementById('loser_exit_button').hidden = true
                        document.getElementById('winner_or_loser').innerHTML = "You Won!"
                        document.getElementById('early_end_div').hidden = true
                        document.getElementById('end_draw_div').hidden = true
                    } else {
                        document.getElementById('withdraw_winner_button').hidden = true
                        document.getElementById('loser_exit_button').hidden = false
                        document.getElementById('winner_or_loser').innerHTML = "You Lost!"
                    }
                    return;
                } else {
                    document.getElementById('winner_div').hidden = true
                }

                if (games.player1.toUpperCase() == currentAccount.toUpperCase()) {
                    document.getElementById('current_player_number').innerHTML = "1"
                }

                if (games.player2.toUpperCase() == currentAccount.toUpperCase()) {
                    document.getElementById('current_player_number').innerHTML = "2"
                }
                if (games.gameTurn != gameMove) {
                    console.log('previous round score calculated, displaying in previous round section')
                    gameMove = games.gameTurn
                    //p1
                    if (JSON.parse(gameMoves[0][0]) == 1) {
                        document.getElementById('p1_attacks_hair').innerHTML = "X"
                        document.getElementById('p1_attacks_hair').style.color = "red"
                    } else {
                        document.getElementById('p1_attacks_hair').innerHTML = "&#10003;"
                        document.getElementById('p1_attacks_hair').style.color = "green"
                    }
                    if (JSON.parse(gameMoves[0][1]) == 1) {
                        document.getElementById('p1_attacks_eyes').innerHTML = "X"
                        document.getElementById('p1_attacks_eyes').style.color = "red"
                    } else {
                        document.getElementById('p1_attacks_eyes').innerHTML = "&#10003;"
                        document.getElementById('p1_attacks_eyes').style.color = "green"
                    }
                    if (JSON.parse(gameMoves[0][2]) == 1) {
                        document.getElementById('p1_attacks_nose').innerHTML = "X"
                        document.getElementById('p1_attacks_nose').style.color = "red"
                    } else {
                        document.getElementById('p1_attacks_nose').innerHTML = "&#10003;"
                        document.getElementById('p1_attacks_nose').style.color = "green"
                    }
                    if (JSON.parse(gameMoves[0][3]) == 1) {
                        document.getElementById('p1_attacks_nipple').innerHTML = "X"
                        document.getElementById('p1_attacks_nipple').style.color = "red"
                    } else {
                        document.getElementById('p1_attacks_nipple').innerHTML = "&#10003;"
                        document.getElementById('p1_attacks_nipple').style.color = "green"
                    }
                    if (JSON.parse(gameMoves[1][0]) == 1) {
                        document.getElementById('p1_defends_hair').innerHTML = "X"
                        document.getElementById('p1_defends_hair').style.color = "red"
                    } else {
                        document.getElementById('p1_defends_hair').innerHTML = "&#10003;"
                        document.getElementById('p1_defends_hair').style.color = "green"
                    }
                    if (JSON.parse(gameMoves[1][1]) == 1) {
                        document.getElementById('p1_defends_eyes').innerHTML = "X"
                        document.getElementById('p1_defends_eyes').style.color = "red"
                    } else {
                        document.getElementById('p1_defends_eyes').innerHTML = "&#10003;"
                        document.getElementById('p1_defends_eyes').style.color = "green"
                    }
                    if (JSON.parse(gameMoves[1][2]) == 1) {
                        document.getElementById('p1_defends_nose').innerHTML = "X"
                        document.getElementById('p1_defends_nose').style.color = "red"
                    } else {
                        document.getElementById('p1_defends_nose').innerHTML = "&#10003;"
                        document.getElementById('p1_defends_nose').style.color = "green"
                    }
                    if (JSON.parse(gameMoves[1][3]) == 1) {
                        document.getElementById('p1_defends_nipple').innerHTML = "X"
                        document.getElementById('p1_defends_nipple').style.color = "red"
                    } else {
                        document.getElementById('p1_defends_nipple').innerHTML = "&#10003;"
                        document.getElementById('p1_defends_nipple').style.color = "green"
                    }
                    //p2
                    if (JSON.parse(gameMoves[2][0]) == 1) {
                        document.getElementById('p2_attacks_hair').innerHTML = "X"
                        document.getElementById('p2_attacks_hair').style.color = "red"
                    } else {
                        document.getElementById('p2_attacks_hair').innerHTML = "&#10003;"
                        document.getElementById('p2_attacks_hair').style.color = "green"
                    }
                    if (JSON.parse(gameMoves[2][1]) == 1) {
                        document.getElementById('p2_attacks_eyes').innerHTML = "X"
                        document.getElementById('p2_attacks_eyes').style.color = "red"
                    } else {
                        document.getElementById('p2_attacks_eyes').innerHTML = "&#10003;"
                        document.getElementById('p2_attacks_eyes').style.color = "green"
                    }
                    if (JSON.parse(gameMoves[2][2]) == 1) {
                        document.getElementById('p2_attacks_nose').innerHTML = "X"
                        document.getElementById('p2_attacks_nose').style.color = "red"
                    } else {
                        document.getElementById('p2_attacks_nose').innerHTML = "&#10003;"
                        document.getElementById('p2_attacks_nose').style.color = "green"
                    }
                    if (JSON.parse(gameMoves[2][3]) == 1) {
                        document.getElementById('p2_attacks_nipple').innerHTML = "X"
                        document.getElementById('p2_attacks_nipple').style.color = "red"
                    } else {
                        document.getElementById('p2_attacks_nipple').innerHTML = "&#10003;"
                        document.getElementById('p2_attacks_nipple').style.color = "green"
                    }
                    if (JSON.parse(gameMoves[3][0]) == 1) {
                        document.getElementById('p2_defends_hair').innerHTML = "X"
                        document.getElementById('p2_defends_hair').style.color = "red"
                    } else {
                        document.getElementById('p2_defends_hair').innerHTML = "&#10003;"
                        document.getElementById('p2_defends_hair').style.color = "green"
                    }
                    if (JSON.parse(gameMoves[3][1]) == 1) {
                        document.getElementById('p2_defends_eyes').innerHTML = "X"
                        document.getElementById('p2_defends_eyes').style.color = "red"
                    } else {
                        document.getElementById('p2_defends_eyes').innerHTML = "&#10003;"
                        document.getElementById('p2_defends_eyes').style.color = "green"
                    }
                    if (JSON.parse(gameMoves[3][2]) == 1) {
                        document.getElementById('p2_defends_nose').innerHTML = "X"
                        document.getElementById('p2_defends_nose').style.color = "red"
                    } else {
                        document.getElementById('p2_defends_nose').innerHTML = "&#10003;"
                        document.getElementById('p2_defends_nose').style.color = "green"
                    }
                    if (JSON.parse(gameMoves[3][3]) == 1) {
                        document.getElementById('p2_defends_nipple').innerHTML = "X"
                        document.getElementById('p2_defends_nipple').style.color = "red"
                    } else {
                        document.getElementById('p2_defends_nipple').innerHTML = "&#10003;"
                        document.getElementById('p2_defends_nipple').style.color = "green"
                    }

                    let player1Deductions = 0
                    let player2Deductions = 0
                    
                    //score
                        // player 1 defends hair, player 2 attacks hair
                    if (JSON.parse(gameMoves[1][0]) == 1 && JSON.parse(gameMoves[2][0]) == 2) {
                        document.getElementById('my_hair_point_deduction').innerHTML = "-1"
                        document.getElementById('my_hair_point_deduction').style.color = "red"
                        player1Deductions--
                    } else {
                        document.getElementById('my_hair_point_deduction').innerHTML = "0"
                        document.getElementById('my_hair_point_deduction').style.color = "white"
                        
                    }
                        // player 1 defends eyes, player 2 attacks eyes
                    if (JSON.parse(gameMoves[1][1]) == 1 && JSON.parse(gameMoves[2][1]) == 2) {
                        document.getElementById('my_eyes_point_deduction').innerHTML = "-1"
                        document.getElementById('my_eyes_point_deduction').style.color = "red"
                        player1Deductions--
                    } else {
                        document.getElementById('my_eyes_point_deduction').innerHTML = "0"
                        document.getElementById('my_eyes_point_deduction').style.color = "white"
                    }
                        // player 1 defends nose, player 2 attacks nose
                    if (JSON.parse(gameMoves[1][2]) == 1 && JSON.parse(gameMoves[2][2]) == 2) {
                        document.getElementById('my_nose_point_deduction').innerHTML = "-1"
                        document.getElementById('my_nose_point_deduction').style.color = "red"
                        player1Deductions--
                    } else {
                        document.getElementById('my_nose_point_deduction').innerHTML = "0"
                        document.getElementById('my_nose_point_deduction').style.color = "white"
                    }
                        // player 1 defends nipple, player 2 attacks nipple
                    if (JSON.parse(gameMoves[1][3]) == 1 && JSON.parse(gameMoves[2][3]) == 2) {
                        document.getElementById('my_nipple_point_deduction').innerHTML = "-1"
                        document.getElementById('my_nipple_point_deduction').style.color = "red"
                        player1Deductions--
                    } else {
                        document.getElementById('my_nipple_point_deduction').innerHTML = "0"
                        document.getElementById('my_nipple_point_deduction').style.color = "white"
                    }
                        // player 2 defends hair, player 1 attacks hair
                    if (JSON.parse(gameMoves[3][0]) == 1 && JSON.parse(gameMoves[0][0]) == 2) {
                        document.getElementById('my_hair_point_hits').innerHTML = "-1"
                        document.getElementById('my_hair_point_hits').style.color = "red"
                        player2Deductions--
                    } else {
                        document.getElementById('my_hair_point_hits').innerHTML = "0"
                        document.getElementById('my_hair_point_hits').style.color = "white"
                    }
                    if (JSON.parse(gameMoves[3][1]) == 1 && JSON.parse(gameMoves[0][1]) == 2) {
                        document.getElementById('my_eyes_point_hits').innerHTML = "-1"
                        document.getElementById('my_eyes_point_hits').style.color = "red"
                        player2Deductions--
                    } else {
                        document.getElementById('my_eyes_point_hits').innerHTML = "0"
                        document.getElementById('my_eyes_point_hits').style.color = "white"
                    }
                    if (JSON.parse(gameMoves[3][2]) == 1 && JSON.parse(gameMoves[0][2]) == 2) {
                        document.getElementById('my_nose_point_hits').innerHTML = "-1"
                        document.getElementById('my_nose_point_hits').style.color = "red"
                        player2Deductions--
                    } else {
                        document.getElementById('my_nose_point_hits').innerHTML = "0"
                        document.getElementById('my_nose_point_hits').style.color = "white"
                    }
                    if (JSON.parse(gameMoves[3][3]) == 1 && JSON.parse(gameMoves[0][3]) == 2) {
                        document.getElementById('my_nipple_point_hits').innerHTML = "-1"
                        document.getElementById('my_nipple_point_hits').style.color = "red"
                        player2Deductions--
                    } else {
                        document.getElementById('my_nipple_point_hits').innerHTML = "0"
                        document.getElementById('my_nipple_point_hits').style.color = "white"
                    }

                    if (player1Deductions < 0) {
                        document.getElementById('player1_point_deduction').style.color = "red"
                    } else {
                        document.getElementById('player1_point_deduction').style.color = "white"
                    }
                    if (player2Deductions < 0) {
                        document.getElementById('player2_point_deduction').style.color = "red"
                    } else {
                        document.getElementById('player2_point_deduction').style.color = "white"
                    }

                    document.getElementById('player1_point_deduction').innerHTML = player1Deductions
                    document.getElementById('player2_point_deduction').innerHTML = player2Deductions
                }
                // document.getElementById('gameIsLive').innerHTML = games.gameIsLive
                document.getElementById('player1Hp').innerHTML = games.player1Hp + " HP"
                document.getElementById('player2Hp').innerHTML = games.player2Hp + " HP"

                // document.getElementById('winner').innerHTML = winner
                // if player 1
                if (games.player1.toUpperCase() == currentAccount.toUpperCase()) {
                    if (games.isPlayer1Committed == false && games.isPlayer2Committed == false &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "CHOOSE YOUR ATTACK AND DEFENDS.."
                        document.getElementById('commit_button').hidden = false
                        document.getElementById('reveal_button').hidden = true
                        enableChecks()
                    }
                    if (games.isPlayer1Committed == false && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "OPPONENT HAS SUBMITTED THEIR MOVE, WAITING ON YOU.."
                        document.getElementById('commit_button').hidden = false
                        document.getElementById('reveal_button').hidden = true
                        enableChecks()
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == false &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "YOU HAVE SUBMITTED YOUR MOVES, WAITING ON PLAYER 2.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = true
                        disableChecks()
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "BOTH PLAYERS SUBMITTED, REVEAL YOUR MOVES NOW.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = false
                        disableChecks()
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == true ) {
                        document.getElementById('live_feed').innerHTML = "PLAYER 2 HAS REVEALED, REVEAL YOUR MOVES NOW TO END ROUND.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = false
                        disableChecks()
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == true && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "YOU HAVE REVEALED YOUR MOVES, WAITING ON PLAYER 2 TO END ROUND.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = true
                        disableChecks()
                    }
                    if (games.player2Hp == 0) {
                        document.getElementById('live_feed').innerHTML = "YOU HAVE WON! PLEASE PROCEED TO WITHDRAW WINNINGS."
                        document.getElementById('winner_div').hidden = false
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = true
                        disableChecks()
                    }
                    if (games.player1Hp == 0) {
                        document.getElementById('live_feed').innerHTML = "YOU HAVE LOST. PLAYER 2 HAS WON."
                        document.getElementById('winner_div').hidden = false
                        // withdraw from game button?
                    }
                    if (games.player2 == "0x0000000000000000000000000000000000000000") {
                        disableChecks()
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('live_feed').innerHTML = "WAITING FOR PLAYER 2 TO JOIN."
                    } else {
                        // enableChecks()
                        // document.getElementById('commit_button').hidden = false
                        // document.getElementById('live_feed').innerHTML = "CHOOSE YOUR ATTACK AND DEFENDS.."
                    }
                }
                if (games.player2.toUpperCase() == currentAccount.toUpperCase()) {
                    if (games.isPlayer1Committed == false && games.isPlayer2Committed == false &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "CHOOSE YOUR ATTACK AND DEFENDS.."
                        document.getElementById('commit_button').hidden = false
                        document.getElementById('reveal_button').hidden = true
                        enableChecks()
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == false &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "OPPONENT HAS SUBMITTED THEIR MOVE, WAITING ON YOU.."
                        document.getElementById('commit_button').hidden = false
                        document.getElementById('reveal_button').hidden = true
                        enableChecks()
                    }
                    if (games.isPlayer1Committed == false && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "YOU HAVE SUBMITTED YOUR MOVES, WAITING ON PLAYER 1.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = true
                        disableChecks()
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "BOTH PLAYERS SUBMITTED, REVEAL YOUR MOVES NOW.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = false
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == true && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "PLAYER 1 HAS REVEALED, REVEAL YOUR MOVES NOW TO END ROUND.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = false
                        disableChecks()
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == true ) {
                        document.getElementById('live_feed').innerHTML = "YOU HAVE REVEALED YOUR MOVES, WAITING ON PLAYER 1 TO END ROUND.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = true
                        disableChecks()
                    }
                    if (games.player1Hp == 0) {
                        document.getElementById('live_feed').innerHTML = "YOU HAVE WON! PLEASE PROCEED TO WITHDRAW WINNINGS."
                        document.getElementById('winner_div').hidden = false
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = true
                    }
                    if (games.player2Hp == 0) {
                        document.getElementById('winner_div').hidden = false
                        document.getElementById('live_feed').innerHTML = "YOU HAVE LOST. PLAYER 1 HAS WON."
                    }
                }

                if (determineIfGameIsDraw(games, timestamp) == true && games.gameIsLive == true) {
                    document.getElementById('live_feed').innerHTML = "THIS GAME IS A DRAW."
                    document.getElementById('end_draw_div').hidden = false
                    document.getElementById('commit_button').hidden = true
                    document.getElementById('reveal_button').hidden = true
                    
                    // canEnable = false
                    disableChecks()
                    // return;
                }

                // console.log(determineIfGameCanEarlyEnd(games, timestamp), "can early end?")
                [canEarlyEnd, playerNumber, message, winner] = determineIfGameCanEarlyEnd(games, timestamp)
                if (canEarlyEnd == true) {
                    // console.log(canEarlyEnd)
                    disableChecks()
                    document.getElementById('early_end_div').hidden = false
                    document.getElementById('commit_button').hidden = true
                    document.getElementById('reveal_button').hidden = true
                    document.getElementById('live_feed').innerHTML = message
                    // document.getElementById('early_end_text').innerHTML = winner
                } else {
                    document.getElementById('early_end_div').hidden = true
                }

                currentAttackAndDefends = gameMoves
                currentGameStats = games
                updateLiveGame(myGameNumber)

                // update these to compare the next contract call to for updates on page
                return;
            })
    }, 6000);
}

function revealAnswer() {
    let game_number = localStorage.getItem("myGameNumber");
    let random_number = localStorage.getItem("myRandomNumber");
    let attack_array = JSON.parse(localStorage.getItem("myAttackArray"));
    let defend_array = JSON.parse(localStorage.getItem("myDefendArray"));
    let block_number = JSON.parse(localStorage.getItem("block#forHash"));
    document.getElementById('reveal_button').disabled = true
    GAME_Contract.methods.revealVote(game_number, attack_array, defend_array, random_number, block_number).send({from: currentAccount}).on('transactionHash', tx => {

    }).then(receipt => {
        if (receipt.status == '0x1' || receipt.status == 1) {
            // console.log('Transaction Successful')
            document.getElementById('reveal_button').hidden = false
            document.getElementById('reveal_button').disabled = false
            // console.log(receipt)
        } else {
        
        }
    }).catch(err => {
        // console.log('Error', err)
        document.getElementById('reveal_button').disabled = false
    }). finally(() => {
        // console.log('approve function finished, returning')
        return
    })
}

function endGameWinner() {
    GAME_Contract.methods.winnerWithdraw(myGameNumber).send({from: currentAccount}).on('transactionHash', tx => {

    }).then(receipt => {
        if (receipt.status == '0x1' || receipt.status == 1) {
            // console.log('Transaction Successful')
            // console.log(receipt)
            getAccount()
            document.getElementById('winner_div').hidden = true;
        } else {
        }
    }).catch(err => {

    }). finally(() => {
        return
    })
}

function endGameLoser() {
    GAME_Contract.methods.loserWithdraw(myGameNumber).send({from: currentAccount}).on('transactionHash', tx => {

        }).then(receipt => {
            if (receipt.status == '0x1' || receipt.status == 1) {
                // console.log('Transaction Successful')
                // console.log(receipt)
                getAccount()
                document.getElementById('winner_div').hidden = true;
            } else {
            
            }
        }).catch(err => {
        
        }). finally(() => {
        
            return
        })
}

function setNFT() {
    const nftContract = document.getElementById('nft_gen').value
    // console.log(nftContract)
    const nftNumber = document.getElementById('nft_number_choice').value
    // console.log(nftNumber > gen1_totalSupply)
    if (nftNumber > gen1_totalSupply && nftContract.toUpperCase() == ECHPUNKS_NFT_address.toUpperCase()) {
        document.getElementById('not_your_nft').innerHTML = "Invalid NFT Number"
        return;
    }
    if (nftNumber > gen2_totalSupply && nftContract.toUpperCase() == ECHPUNKS_NFT2_address.toUpperCase()) {
        document.getElementById('not_your_nft').innerHTML = "Invalid NFT Number"
        return;
    }
    // console.log(typeof(parseFloat(nftNumber)))
    let _isOwner
    if (nftContract.toUpperCase() == ECHPUNKS_NFT_address.toUpperCase()) {
        _isOwner = promisify(isOwner_ => ECHPUNKS_NFT_Contract.methods.ownerOf(nftNumber).call(isOwner_))
    }
    if (nftContract.toUpperCase() == ECHPUNKS_NFT2_address.toUpperCase()) {
        _isOwner = promisify(isOwner_ => ECHPUNKS_NFT2_Contract.methods.ownerOf(nftNumber).call(isOwner_))
    }

    Promise.all([_isOwner])
    .then(function ([isOwner]) {
        // console.log(isOwner.toUpperCase() == currentAccount.toUpperCase())
        if (isOwner.toUpperCase() == currentAccount.toUpperCase()) {
            document.getElementById('not_your_nft').innerHTML = ""
            GAME_Contract.methods.setPlayer(nftContract, nftNumber).send({from: currentAccount}).on('transactionHash', tx => {

            }).then(receipt => {
                if (receipt.status == '0x1' || receipt.status == 1) {
                    // console.log('Transaction Successful')
                    // console.log(receipt)
                    getAccount()
                    // document.getElementById('winner_div').hidden = true;
                } else {
                
                }
            }).catch(err => {
            
            }). finally(() => {
                return
            })
        } else {
            document.getElementById('not_your_nft').innerHTML = "You do not own this NFT"
        }
    })
}

function fetchImages(player1, player2) {
    if (imagesSet == false) {
        let _p1, _p2
        _p1 = promisify(p1_ => GAME_Contract.methods.players(player1).call(p1_))
        _p2 = promisify(p2_ => GAME_Contract.methods.players(player2).call(p2_))

        Promise.all([_p1, _p2])
        .then(function ([p1, p2]) {
            // console.log(p1, p2)
            //p1
            if (p1.currentContract.toUpperCase() == "0x7f11d149171711904f6c497A9ed0E8Bd4D895551".toUpperCase()) { // gen 1
                document.getElementById("p1_image").src = "./../../assets/images/testpunks/" + p1.currentNFTNumber + ".png"
            } else if (p1.currentContract.toUpperCase() == "0x59b62377D9ba3f4fB4F4df8Ec2b771984CEaf86c".toUpperCase()) { // gen 2
                document.getElementById("p1_image").src = "./../../assets/images/punks2/" + p1.currentNFTNumber + ".png"
            } else { // no player
                document.getElementById("p1_image").src = "./../../assets/images/nakedpunk.png"
            }
                document.getElementById("player1_wins").innerHTML = p1.totalWins + " Wins"
                document.getElementById("player1_losses").innerHTML = p1.totalLosses + " Losses"
                document.getElementById("player2_wins").innerHTML = p2.totalWins + " Wins"
                document.getElementById("player2_losses").innerHTML = p2.totalLosses + " Losses"
            
            //p2
            if (p2.currentContract.toUpperCase() == "0x7f11d149171711904f6c497A9ed0E8Bd4D895551".toUpperCase()) { // gen 1
                document.getElementById("p2_image").src = "./../../assets/images/testpunks/" + p2.currentNFTNumber + ".png"
            } else if (p2.currentContract.toUpperCase() == "0x59b62377D9ba3f4fB4F4df8Ec2b771984CEaf86c".toUpperCase()) { // gen 2
                document.getElementById("p2_image").src = "./../../assets/images/punks2/" + p2.currentNFTNumber + ".png"
            } else { // no player
                document.getElementById("p2_image").src = "./../../assets/images/nakedpunk.png"
                imagesSet = false 
                return;
            }
            return;
        })
        imagesSet = true
    }
}


const getImage = (currentMint) => {
    $('#image_display').attr("src", "./../../assets/images/testpunks/" + (parseInt(currentMint)+1).toString() + ".png")
    return
}

function checkIfPlayerIsRegistered(address) {
     let _player
        _player = promisify(player_ => GAME_Contract.methods.players(address).call(player_))

        Promise.all([_player])
        .then(function ([player]) {
            // console.log(player.isPlayable)
            if(player.isPlayable == true) {
                document.getElementById('i_am_registered').hidden = false
                document.getElementById('im_not_registered').hidden = true
                document.getElementById('clear_account_button').hidden = false
                document.getElementById('create_game').disabled = false
                document.getElementById('player_2_address').disabled = false
                document.getElementById('join_game').disabled = false
                document.getElementById('game_number').disabled = false
            } else {
                document.getElementById('i_am_registered').hidden = true
                document.getElementById('im_not_registered').hidden = false
                document.getElementById('clear_account_button').hidden = true
                document.getElementById('create_game').disabled = true
                document.getElementById('player_2_address').disabled = true
                document.getElementById('join_game').disabled = true
                document.getElementById('game_number').disabled = true
            }
            //p1
            
            return;
        })
}

function clearAccount() {
    GAME_Contract.methods.clearPlayer().send({from: currentAccount}).on('transactionHash', tx => {

    }).then(receipt => {
        if (receipt.status == '0x1' || receipt.status == 1) {
            // console.log('Transaction Successful')
            // console.log(receipt)
            getAccount()
            // document.getElementById('winner_div').hidden = true;
        } else {
        
        }
    }).catch(err => {
    
    }). finally(() => {
        return
    })
}
function cancelGame() {
    GAME_Contract.methods.cancelGame(myGameNumber).send({from: currentAccount}).on('transactionHash', tx => {

    }).then(receipt => {
        if (receipt.status == '0x1' || receipt.status == 1) {
            // console.log('Transaction Successful')
            // console.log(receipt)
            getAccount()
            // document.getElementById('winner_div').hidden = true;
        } else {
        
        }
    }).catch(err => {
    
    }). finally(() => {
        return
    })
}

    
const commitTime = 180
const revealTime = 360
function determineIfGameIsDraw(game, timestamp) {
    if (// commit time limit exceeded
            // (timestamp > game.roundStartTime + commitTime &&
            (timestamp - game.roundStartTime > commitTime &&
            // player 2 not committed or revealed
            !game.isPlayer2Committed &&
            !game.isPlayer2Revealed &&
            // player 1 not committed or revealed
            !game.isPlayer1Committed &&
            !game.isPlayer1Revealed ) ||
            // reveal time limit exceeded
            // (timestamp > game.roundStartTime + revealTime &&
            (timestamp - game.roundStartTime > revealTime &&
            // player 2 has committed but not revealed
            game.isPlayer2Committed &&
            !game.isPlayer2Revealed &&
            // player 1 has committed but not revealed
            game.isPlayer1Committed &&
            !game.isPlayer1Revealed )
    ) {
        return true;
    } else {
        return false;
    }
}

function endDraw() {
    GAME_Contract.methods.endDraw(myGameNumber).send({from: currentAccount}).on('transactionHash', tx => {

    }).then(receipt => {
        if (receipt.status == '0x1' || receipt.status == 1) {
            // console.log('Transaction Successful')
            // console.log(receipt)
            getAccount()
            // document.getElementById('winner_div').hidden = true;
        } else {
        
        }
    }).catch(err => {
    
    }). finally(() => {
        return
    })
}

function determineIfGameCanEarlyEnd(game, timestamp) {
    // player 1 stuff
    if (// commit time limit exceeded
        timestamp - game.roundStartTime > commitTime &&
        // player 2 not committed or revealed
        !game.isPlayer2Committed &&
        !game.isPlayer2Revealed &&
        // player 1 has committed but not revealed
        game.isPlayer1Committed &&
        !game.isPlayer1Revealed
    ) {
        return [true, 1, "PLAYER 2 NEVER COMMITTED", "PLAYER 1 WINS"]
    } else if (
        timestamp - game.roundStartTime > revealTime &&
        // player 2 has committed but not revealed
        game.isPlayer2Committed &&
        !game.isPlayer2Revealed &&
        // player 1 has committed and revealed
        game.isPlayer1Committed &&
        game.isPlayer1Revealed 
    ) {
        return [true, 1, "PLAYER 2 NEVER REVEALED", "PLAYER 1 WINS"];
    // player 2 stuff
    } else if (
        (timestamp - game.roundStartTime > commitTime &&
        // player 1 not committed or revealed
        !game.isPlayer1Committed &&
        !game.isPlayer1Revealed &&
        // player 2 has committed but not revealed
        game.isPlayer2Committed &&
        !game.isPlayer2Revealed )
    ) {
        return [true, 2, "PLAYER 1 NEVER COMMITTED", "PLAYER 2 WINS"];
    } else if (
        timestamp - game.roundStartTime > revealTime &&
        // player 1 has committed but not revealed
        game.isPlayer1Committed &&
        !game.isPlayer1Revealed &&
        // player 2 has committed and revealed
        game.isPlayer2Committed &&
        game.isPlayer2Revealed
    ) {
        return [true, 2, "PLAYER 1 NEVER REVEALED", "PLAYER 2 WINS"];
    } else {
        return [false, 0, "game cannot end early", "game still active"];
    }
}

function earlyEndGame() {
    GAME_Contract.methods.earlyEndGame(myGameNumber).send({from: currentAccount}).on('transactionHash', tx => {

    }).then(receipt => {
        if (receipt.status == '0x1' || receipt.status == 1) {
            // console.log('Transaction Successful')
            // console.log(receipt)
            getAccount()
            // document.getElementById('winner_div').hidden = true;
        } else {
        
        }
    }).catch(err => {
    
    }). finally(() => {
        return
    })
}