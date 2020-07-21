const items = [
    {
        barcode: 'ITEM000000',
        name: 'Coca-Cola',
        price: 3
    },
    {
        barcode: 'ITEM000001',
        name: 'Sprite',
        price: 3
    },
    {
        barcode: 'ITEM000002',
        name: 'Apple',
        price: 5
    },
    {
        barcode: 'ITEM000003',
        name: 'Litchi',
        price: 15
    },
    {
        barcode: 'ITEM000004',
        name: 'Battery',
        price: 2
    },
    {
        barcode: 'ITEM000005',
        name: 'Instant Noodles',
        price: 4
    }
];
function printReceipt(barcodes) {
    if(isBarcodesEmpty(barcodes)){
        return "***<store earning no money>Receipt ***" +
                "Total: 0 (yuan)\n" +
                "**********************";
    }
    console.log(getReceiptStr(barcodes));
}
function getReceiptStr(barcodes){
    let itemMap = getItemMapByBarcodes(barcodes);
    let resultStr = "\n***<store earning no money>Receipt ***\n";
    let total = 0;
    itemMap.forEach(function(value , key){
        let item = getItemInfoByBarcode(key);
        resultStr += "Name: " + item.name + ", Quantity: " + value + ", Unit price: " + item.price + " (yuan), Subtotal: " + (item.price * value) + " (yuan)\n";
        total += item.price * value;
    });
    resultStr += "----------------------\n";
    resultStr += "Total: " + total + " (yuan)\n";
    resultStr += "**********************";
    return resultStr;
}

function isBarcodesEmpty(barcodes){
    return barcodes.length == 0;
}

function getItemMapByBarcodes(barcodes){
    let itemMap = new Map();
    // 统计遍历完之后，得到了对应 barcode的item的数量
    for(let i = 0; i < barcodes.length; i++) {
        let barcode = barcodes[i];
        let item = getItemInfoByBarcode(barcode);
        if(itemMap.has(item.barcode)){
            itemMap.set(item.barcode, itemMap.get(barcode) + 1); // 对应barcode的item数量 +1
        }else {
            itemMap.set(item.barcode , 1);  // 第一次出现的item，数量设为 1
        }
    }
    return itemMap;
}

function getItemInfoByBarcode(barcode){
    for(let i = 0; i < items.length; i++){
        if(barcode == items[i].barcode){
            return items[i];
        }
    }
}


module.exports = {
    printReceipt
};