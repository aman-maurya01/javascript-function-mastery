function generateTicketID(){

    return Math.floor(Math.random() * 10000);
}


function seatCategory(type){

    if(type === "VIP"){

        return 500;
    }

    else if(type === "Premium"){

        return 350;
    }

    else{

        return 200;
    }
}


function applyDiscount(total,coupon){

    if(coupon === "AMAN50"){

        return total - 50;
    }

    return total;
}


function addGST(amount){

    return amount + (amount * 0.18);
}



function bookTicket(){

    let customerName = document.getElementById("name").value;

    let movieName = document.getElementById("movie").value;

    let seats = Number(document.getElementById("seats").value);

    let seatType = document.getElementById("seatType").value;

    let coupon = document.getElementById("coupon").value;


    let ticketID = generateTicketID();

    let seatPrice = seatCategory(seatType);

    let total = seats * seatPrice;

    let discountPrice = applyDiscount(total,coupon);

    let finalPrice = addGST(discountPrice);


    let result = `

        <h2>🎟 Booking Successful</h2>

        <p><b>Ticket ID :</b> ${ticketID}</p>

        <p><b>Customer :</b> ${customerName}</p>

        <p><b>Movie :</b> ${movieName}</p>

        <p><b>Seat Type :</b> ${seatType}</p>

        <p><b>Seats :</b> ${seats}</p>

        <p><b>Total :</b> ₹${total}</p>

        <p><b>After Discount :</b> ₹${discountPrice}</p>

        <p><b>Final Price :</b> ₹${finalPrice}</p>

    `;


    document.getElementById("output").innerHTML = result;
}