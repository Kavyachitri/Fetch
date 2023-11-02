let cards = document.querySelector(".cards")

let maxItem = 4
const getTheProducts = (count) => {
  fetch("https://fakestoreapi.com/products")
  .then((response)=>{
    return  response.json();
  })
  .then((data) => {
    let cards = document.querySelector(".cards")
    cards.innerHTML = ""
    return data
  })
  .then ((data)=>{
              console.log(data);
              for(let i=0;i<count;i++){
  
                 let card = document.createElement("div");
                  cards.appendChild(card);
                  card.classList.add("card")
                 
                 let image = document.createElement("img")
                 image.src = data[i].image
  
                 image.classList.add("product_image")
                 card.appendChild(image);
  
                 let heading = document.createElement("h2")
                 heading.innerHTML = data[i].title;
                 card.appendChild(heading);
  
                 let dataDescription = document.createElement("p")
                 dataDescription.innerHTML = data[i].description;
                 card.appendChild(dataDescription);
  
                 let prodcuctprice = document.createElement("p")
                 prodcuctprice.innerHTML = `Price : ${data[i].price}`
                 card.appendChild(prodcuctprice);
             
              }
  
          
  
          
      })
}


    let more = document.querySelector(".more")
    more.addEventListener("click",()=>{
      maxItem = maxItem + 4
      getTheProducts(maxItem)

    })
  
getTheProducts(maxItem)
