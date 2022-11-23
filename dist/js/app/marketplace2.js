const web3Instance = new Web3(window['ethereum']);

if (typeof window.ethereum !== 'undefined') {
    console.log('metamask is installed!')
} else {
    console.log('install metamask')
    document.querySelector('.enableEthereumButton').innerHTML = '<a target="_blank" href="https://www.metamask.io">Install Metamask</a>'
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// contracts
const ECHP_address = '0xCe2643C6180e857BcE12B850cC5e89FC3B34fF0F';
const ECHP_address_abi = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldRouter","type":"address"},{"indexed":false,"internalType":"address","name":"newRouter","type":"address"}],"name":"UpdatedRouter","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"blacklistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWalletAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferRfi","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"rescueAnyECH20Tokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"weiAmount","type":"uint256"}],"name":"rescueECH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rfi","type":"uint256"},{"internalType":"uint256","name":"_marketing","type":"uint256"},{"internalType":"uint256","name":"_liquidity","type":"uint256"},{"internalType":"uint256","name":"_burn","type":"uint256"}],"name":"setTaxes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tax","type":"uint256"}],"name":"setTeamTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"taxes","outputs":[{"internalType":"uint256","name":"rfi","type":"uint256"},{"internalType":"uint256","name":"marketing","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"burn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totFeesPaid","outputs":[{"internalType":"uint256","name":"rfi","type":"uint256"},{"internalType":"uint256","name":"marketing","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"burn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateMaxTxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateMaxWalletBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRouter","type":"address"},{"internalType":"address","name":"newPair","type":"address"}],"name":"updateRouterAndPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"updateSwapEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateSwapTokensAtAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newWallet","type":"address"}],"name":"updatemarketingWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"whitelistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
const ECHP_Contract = new web3Instance.eth.Contract(ECHP_address_abi, ECHP_address);

const ECHPUNKS_NFT_address = '0x7f11d149171711904f6c497A9ed0E8Bd4D895551';
const ECHPUNKS_NFT_address_abi = abi;
const ECHPUNKS_NFT_Contract = new web3Instance.eth.Contract(ECHPUNKS_NFT_address_abi, ECHPUNKS_NFT_address);

const MARKETPLACE_address = '0x2fee9693d3C7B407Af913053521242cA36F1bAeF';
const MARKETPLACE_address_abi = marketplace_abi;
const MARKETPLACE_Contract = new web3Instance.eth.Contract(MARKETPLACE_address_abi, MARKETPLACE_address);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

const promisify = (inner) =>
    new Promise((resolve, reject) =>
        inner((err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res);
            }
        })
    );

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

window.ethereum.on('accountsChanged', function (accounts) {
    getAccount()
})

window.ethereum.on('networkChanged', function (networkId) {
    console.log('networkChanged', networkId);
    const stringNetworkId = networkId.toString()
    if (stringNetworkId !== "3000") {
    }
    if (stringNetworkId === "3000") {
        if (typeof (networkId) === typeof (0)) {
        } else {
        }
        document.getElementById("enableMeta").hidden = false
    }
});

async function getNetworkId() {
    const network = await web3Instance.eth.net.getId()
    const stringNetworkId = network.toString()
    if (stringNetworkId !== "3000") {
    }
    if (stringNetworkId === "3000") {
        if (typeof (networkId) === typeof (0)) {
        } else {
        }
    }
}



function purchaseListing(marketplaceId, price) {
    // let number = document.getElementById('marketId_number_to_purchase_input').value
    // let val = Web3.utils.fromWei(price, 'ether').toString()
    console.log(typeof(price))
    let val = (price / 10 ** 18).toString()
    // console.log(typeof(val))
    MARKETPLACE_Contract.methods.createMarketSale(ECHPUNKS_NFT_address, marketplaceId.toString()).send({from: currentAccount, value: Web3.utils.toWei(val, 'ether').toString()}).on('transactionHash', tx => {

        console.log("Transaction: ", tx);
        // disableButtons()
    }).then(receipt => {
        console.log('Mined', receipt)
        getAccount()
        loadMetadata()
        // enableButtons()
    }).catch(err => {
        console.log('Error', err)
        // getAccount()
    }). finally(() => {
        console.log('Transaction Finished')
        return
    })
}


// //////////////////////////////////////////////////////////////////////////////////////////////////////////

const ethereumButton = document.querySelector('.enableEthereumButton');
// let totalSupplyForPrice = 0
// console.log('supply for price ' + typeof(totalSupplyForPrice))

ethereumButton.addEventListener('click', () => {
    // document.getElementById('enableMeta').hidden = true
    // document.getElementById('load_button_div').hidden = false
    getAccount()
})

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

let currentAccount = ""

let myTokensArray = {}
let MyMetadataArray = []
let myListedPunks = []
let tempListedPunks = []

// get data for connected wallet
async function getAccount() {

    document.getElementById('buttonmeta').disabled = true
    document.getElementById('buttonmeta').innerHTML = "LOADING.."

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

    let _totalSupply, _tokensByOwner, _isApproved, _ECHP_Balance, _fetchAvailableMarketItems;
    _fetchAvailableMarketItems = promisify(fetchAvailableMarketItems_ => MARKETPLACE_Contract.methods.fetchAvailableMarketItems().call(fetchAvailableMarketItems_))

    _totalSupply = promisify(totalSupply_ => ECHPUNKS_NFT_Contract.methods.totalSupply().call(totalSupply_))
    _tokensByOwner = promisify(tokensByOwner_ => ECHPUNKS_NFT_Contract.methods.tokensByOwner(currentAccount).call(tokensByOwner_))
    _isApproved = promisify(isApproved_ => ECHP_Contract.methods.allowance(currentAccount, ECHPUNKS_NFT_address).call(isApproved_))
    _ECHP_Balance = promisify(ECHP_Balance_ => ECHP_Contract.methods.balanceOf(currentAccount).call(ECHP_Balance_))

    Promise.all([_totalSupply, _tokensByOwner, _isApproved, _ECHP_Balance, _fetchAvailableMarketItems])
    .then(function ([totalSupply, tokensByOwner, isApproved, ECHP_Balance, fetchAvailableMarketItems]) {
        console.log(fetchAvailableMarketItems)
        // displayMyListedPunks(fetchSellingMarketItems)
        tempListedPunks = fetchAvailableMarketItems
        const readECHPBalance = parseInt(ECHP_Balance) / 10 ** 9
        document.getElementById('ECHP_Balance').innerHTML = "<p>ECHP Balance<br>" + readECHPBalance + "</p>"

        myTokensArray = tokensByOwner
        
        document.getElementById('buy_echp_div').hidden = false;

        // create a card for each token id
        for (i = 0; i < myTokensArray.length; i ++) {
            bestFetch(i)
        }
    }).then(function () {
        document.getElementById('enableMeta').hidden = true
        document.getElementById('load_button_div').hidden = false
    })

    showAccount.innerHTML = "<p>Wallet:<br>" + account.match(/.{1,15}/g)[0] + "...</p>"

    if (network === 3000) { // rinkeby=4  ech=3000
        showBalance.innerHTML = "<p>Rinkeby ETH:<br>" + read.toFixed(5) + "</p>"
        return currentAccount;
    } else {
        loadDataButton.innerHTML = "Switch to Rinkeby Network and Try Again"
    }

}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

const loadMetadata = () => {
    document.getElementById('button_column').hidden = true;
    displayMyListedPunks()
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// fetch json data per token id
async function bestFetch(i) {
    try {
        const first = await fetch('./../../assets/data/metadata/' + myTokensArray[i]);
        let json = await first.json(); 
        MyMetadataArray[i] = json
        console.log(i, MyMetadataArray[i])
    } catch (e) {
        console.log('Error!', e);
    }
}

function displayMyListedPunks() {
    for (i = 0; i < tempListedPunks.length; i++) {
        if (tempListedPunks[i].canceled != true) {
            myListedPunks.push({
                "NFTTokenID": tempListedPunks[i].tokenId, 
                "MARKETPLACEID": tempListedPunks[i].marketItemId, 
                "PRICE": (tempListedPunks[i].price)
            })
        }
    }
    console.log('mylistedpunks ',myListedPunks)
    if (myListedPunks.length > 0) {
        for(i=0; i<myListedPunks.length; i++) {
            console.log(myListedPunks[i].tokenId )
            $(
            "<div class='col-12 col-md-3 border border-secondary mt-2'>" +
                "<img style='max-width:100%;max-height:100%;' class='mb-2 mr-2 mt-2' src='./../../assets/images/testpunks/" + myListedPunks[i].NFTTokenID + ".png'>" +
                "<p>Punk # " + myListedPunks[i].NFTTokenID + "</p>" +   
                "<p>Price: " + myListedPunks[i].PRICE / 10 ** 18 + " ECH </p>" +   
                "<div id=''>" +
                    "<button id='' onclick='purchaseListing("+ myListedPunks[i].MARKETPLACEID + "," + myListedPunks[i].PRICE +")' class='btn btn-primary mb-2'>Purchase</button>" +
                "</div>" +
            "</div>"
            ).appendTo('#myListedPunks');
        }
    } else {
        document.getElementById('myListedPunks').innerHTML = ""
    }

}


 