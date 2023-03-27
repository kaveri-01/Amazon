window.onload = function () {
  var dataFromLS = JSON.parse(localStorage.getItem("product"));
  var divFromHtml = document.getElementById("display-bot-right");

  var add = [];
  for (var i = 0; i < dataFromLS.length; i++) {
    add += `<div><div><img src="${
      dataFromLS[i].image
    }" alt="product-image"></div><p>${dataFromLS[i].name}</p><p>${
      dataFromLS[i].price
    }</p><div class="prime">
        <p><mark>Save 5% </mark>with coupon (limited sizes/colours)</p>
        <div>
          <img
            src="https://www.nicepng.com/png/detail/115-1159983_amazon-prime-logo-prime-amazon.png"
            alt="prime logo"
          />
        </div>
        <p>FREE Delivery by Amazon</p>
        <button onclick='addToCart(${JSON.stringify(
          dataFromLS[i]
        )})'>Add To Cart</button>
      </div></div>`;
  }

  divFromHtml.innerHTML = add;
};

function addToCart(pro) {
  
  var product = JSON.stringify(pro);
  var dataFromLS = JSON.parse(localStorage.getItem("userData"));
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    var allUsers = [];
    for (var i = 0; i < dataFromLS.length; i++) {
      if (dataFromLS[i].email === currentUser.currentUserEmail) {
        var newObj =dataFromLS[i];
        newObj["cartProducts"] = newObj["cartProducts"] || [];
        newObj["cartProducts"].push(JSON.parse(product));
        allUsers.push(newObj);
      } else {
        allUsers.push(dataFromLS[i]);
      }
      console.log(allUsers);
      localStorage.setItem("userData",JSON.stringify(allUsers));
      alert("Product Added to cart");
    }
  } else {
    alert("Login to Add Cart");
  }
}
