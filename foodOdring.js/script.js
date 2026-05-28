// ======================================
// Burger Price
// ======================================

let burgerPrice = quantity => {

    return quantity * 120;
};



// ======================================
// Pizza Price
// ======================================

let pizzaPrice = quantity => {

    return quantity * 300;
};



// ======================================
// Coke Price
// ======================================

let cokePrice = quantity => {

    return quantity * 80;
};



// ======================================
// Calculate Total
// ======================================

let calculateTotal = (

    burger,
    pizza,
    coke

) => {

    return burger + pizza + coke;
};



// ======================================
// Apply Discount
// ======================================

let applyDiscount = total => {

    if(total > 1000) {

        return total - 100;
    }

    return total;
};



// ======================================
// Add GST
// ======================================

let addGST = amount => {

    return amount + (amount * 0.18);
};



// ======================================
// Generate Bill
// ======================================

let generateBill = (

    customer,
    burgerQty,
    pizzaQty,
    cokeQty

) => {

    console.log("===== FOOD BILL =====");


    // Burger Total

    let burgerTotal =
        burgerPrice(burgerQty);

    console.log("Burger Total :", burgerTotal);



    // Pizza Total

    let pizzaTotal =
        pizzaPrice(pizzaQty);

    console.log("Pizza Total :", pizzaTotal);



    // Coke Total

    let cokeTotal =
        cokePrice(cokeQty);

    console.log("Coke Total :", cokeTotal);



    // Grand Total

    let total =
        calculateTotal(

            burgerTotal,
            pizzaTotal,
            cokeTotal

        );

    console.log("Total :", total);



    // Discount

    let discountPrice =
        applyDiscount(total);

    console.log("After Discount :", discountPrice);



    // GST

    let finalAmount =
        addGST(discountPrice);

    console.log("Final Amount :", finalAmount);



    // Customer

    console.log("Customer :", customer);

    console.log("=======================");
};



// ======================================
// Function Call
// ======================================

generateBill(

    "Aman",
    2,
    3,
    4

);