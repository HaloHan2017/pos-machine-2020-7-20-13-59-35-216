const DATA_ITEMS = [
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
    if (barcodes.length == 0) {
        return "***<store earning no money>Receipt ***" +
            "Total: 0 (yuan)\n" +
            "**********************";
    }
    console.log(getReceiptStr(getItemQuantityMap(barcodes)));
}

// function getReceiptStr(barcodes) {
//     let itemQuantityMap = getItemQuantityMap(barcodes);
//     return getFormatReceiptDetails(iemQuantityMap);
// }

function getReceiptStr(itemQuantityMap) {
    let resultStr = "\n***<store earning no money>Receipt ***\n";
    let total = 0;
    itemQuantityMap.forEach(function (itemQuantity, barcode) {
        let item = getItemByBarcode(barcode);
        resultStr += `Name: ${item.name}, Quantity: ${itemQuantity}, Unit price: ${item.price} (yuan), Subtotal: ${item.price * itemQuantity} (yuan)\n`;
        total += item.price * itemQuantity;
    });
    resultStr += "----------------------\n";
    resultStr += `Total: ${total} (yuan)\n`;
    resultStr += "**********************";
    return resultStr;
}

// todo 更改方法的命名
function getItemQuantityMap(barcodes) {
    let itemQuantityMap = new Map();
    // todo 使用英文注释，并且尽量少用注释
    // todo 使用forEach去进行遍历
    for (let barcode of barcodes) {
        if (itemQuantityMap.has(barcode)) {
            itemQuantityMap.set(barcode, itemQuantityMap.get(barcode) + 1);
        } else {
            itemQuantityMap.set(barcode, 1);
        }
    }
    // for(let i = 0; i < barcodes.length; i++) {
    //     let barcode = barcodes[i];
    //     let item = getItemInfoByBarcode(barcode);
    //     if(itemMap.has(item.barcode)){
    //         itemMap.set(item.barcode, itemMap.get(barcode) + 1); // 对应barcode的item数量 +1
    //     }else {
    //         itemMap.set(item.barcode , 1);  // 第一次出现的item，数量设为 1
    //     }
    // }
    return itemQuantityMap;
}

function getItemByBarcode(barcode) {
    // DATA_ITEMS.find(item => {
    //     if(barcode === item.barcode){
    //         return item;
    //     }
    // })
    // return null;
    for (let i = 0; i < DATA_ITEMS.length; i++) {
        if (barcode == DATA_ITEMS[i].barcode) {
            return DATA_ITEMS[i];
        }
    }
    // todo 增加返回值
    return null;
}


module.exports = {
    printReceipt
};