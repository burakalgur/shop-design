document.addEventListener("DOMContentLoaded", function () {
  fetch("translations.json")
    .then((response) => response.json())
    .then((data) => {
      const language = "en";
      const { title, description, headerBtn } = data[language];
      document.getElementById("title").textContent = title;
      document.getElementById("description").textContent = description;
      document.getElementById("headerBtn").textContent = headerBtn;
    })
    .catch((error) => console.error("Error loading translations:", error));

  getProducts();
});

const getProducts = async () => {
  try {
    const response = await fetch("products.json");
    const data = await response.json();

    const productsContainer = document.getElementById("cards");

    data.products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
                <img src="${product.img}" alt="${product.description}" />
                <h4>${product.description}</h4>
                <div class="cardFooter">
                  <p>€${product.price}</p>
                  <div class="productColors" >
                    <img src="./assets/Active.png" />
                    <img src="./assets/Ellipse 31.png" />
                    <img src="./assets/Ellipse 32.png" />
                    <img src="./assets/Ellipse 33.png" />
                  </div>
                </div>
            `;
      productsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading products:", error);
  }
};


