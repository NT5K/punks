const fs = require('fs');
let count = 1;
const path = __dirname + '/metadata2';

fs.readdirSync(path).forEach(() => {
    const filePath = path + '/' + count.toString();
    const data = JSON.parse(fs.readFileSync(filePath));

    // console.log(data.image.toString())
    // const nums = data.image.split('/');
    // console.log(nums[3])
    // const ipfs = "ipfs://QmZb38Ag4QpepS4s2JF84RUqQEnLVYCqEsNvfEdwBCTNEF/" + count + ".png"
    // data.description = "Generation 2 ECHPunks are Echelon Blockchain based non-fungible tokens build for the ECHPunk ecosystem with more unique traits."
    data.name = "ECHPunk #" + count + " GEN2"
     // console.log(data.image)

    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
    count++
})