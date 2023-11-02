let Name=document.getElementById("Name");
let Phone=document.getElementById("Phone");
let Email=document.getElementById("Email");
let Place=document.getElementById("Place");

    let starter = document.getElementById("Starters");
    let chicken = document.getElementById("Chicken");
    let burgers = document.getElementById("Burgers");
    let chinese = document.getElementById("Chinese");
    let biryani = document.getElementById("Biryani");
    let gst = document.getElementById("GST(%)");
    let button=document.getElementById("button");


    let Name_=document.getElementById("Name_");
    let Phone_=document.getElementById("Phone_");
    let Email_=document.getElementById("Email_");
    let Place_=document.getElementById("Place_");
    let TotalAmount_=document.getElementById("TotalAmount_");
    let GST_=document.getElementById("GST_");
    let resultTip = document.getElementById("tip")
    let resultNote = document.getElementById("note")

button.addEventListener("click", (e)=>{
    e.preventDefault()


    let total_amount = parseInt(starter.value) + parseInt(chicken.value) + parseInt(burgers.value) + parseInt(chinese.value) + parseInt(biryani.value) 
console.log(total_amount)

    let gst_rate=(parseInt(gst.value)/100)*total_amount + total_amount;

    Name_.innerHTML="Name" + Name.value;
    Phone_.innerHTML="Phone" + Phone.value;
    Email_.innerHTML="Email" + Email.value;
    Place_.innerHTML="Place" + Place.value;
    TotalAmount_.innerHTML="TotalAmount" + total_amount;
    GST_.innerHTML=`Total Amount With ${gst.value} is ${gst_rate}`

    if(TotalAmount_>=18000)
    {
        resultTip.innerHTML = `With tip 1000 ${gst_rate + 1000}`;
    }
    else{
        resultTip.innerHTML = `With tip 500 ${gst_rate + 500}`;
    }





     



})



    // button.addEventListener("click",()=>{


// console.log("object");

// let result = starter+chicken+burgers
// console.log(result);
//     //     let totalAmount= parseFloat(starter) + parseFloat(chicken) + parseFloat(burgers) + parseFloat(chinese) + parseFloat(biryani) + (gst)
//     //    console.log(totalAmount)

//     // //     let Gst=((gst.value)/100) * totalAmount + totalAmount;

//     //     Name_.innerHTML="Name"+Name.value;
//     //     Phone_.innerHTML="Phone"+Phone.value;
//     //     Email_.innerHTML="Email"+Email.value;
//     //     Place_.innerHTML="Place"+Place.value;
//     //     // TotalAmount_.innerHTML="TotalAmonut"+totalAmount;
//     //     // GST_.innerHTML=`Total Bill Amount With ${gst.value}% gst is ${Gst}`;


//     })
// let starter = document.getElementById("Starters");
// let chicken = document.getElementById("Chicken").value;
// let burgers = document.getElementById("Burgers").value;
// let chinese = document.getElementById("Chinese").value;
// let biryani = document.getElementById("Biryana").value;
// button = document.querySelector("button");
// console.log("object");
// button.addEventListener("click", (e) => {
//     e.preventDefault()
//     let starterValue = starter.value;

// console.log(starterValue);
    // let gst = document.getElementById("GST(%)").value;


    // let totalAmount = parseFloat(starter) + parseFloat(chicken) + parseFloat(burgers) + parseFloat(chinese) + parseFloat(biryani) + (gst)
    // console.log(totalAmount);

// });






