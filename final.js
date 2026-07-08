
const apiUrl = "https://fakestoreapi.com/products";

const productContainer = document.querySelector("#productContainer");
const totalProducts = document.querySelector("#totalProducts");
const finalDiv = document.querySelector(".final");
const errorDiv = document.querySelector("#error");

fetch(apiUrl)
    .then((response) => response.json())
    .then((products) => {

        totalProducts.textContent =
            "Total Products: " + products.length;

        products.forEach((product) => {

            
            const card = document.createElement("div");
            card.setAttribute("class", "card");

            
            const image = document.createElement("img");
            image.setAttribute("src", product.image);

                                                            
            const title = document.createElement("h3");

            if (product.title.length > 30) {
                title.textContent =
                    product.title.slice(0, 30) + "...";
            } else {
                title.textContent = product.title;
            }

            
            const price = document.createElement("p");
            price.textContent = "Price: $" + product.price;

        
            const category = document.createElement("p");
            category.textContent =
                "Category: " + product.category;

            
            const description = document.createElement("p");

            if (product.description.length > 50) {
                description.textContent =
                    product.description.slice(0, 50) + "...";
            } else {
                description.textContent =
                    product.description;
            }

            
            const tag = document.createElement("p");
            tag.setAttribute("class", "tag");

            if (product.price > 100) {
                tag.textContent = "Expensive Product";
            } else {
                tag.textContent = "Budget Product";
            }

            
            const priceBtn = document.createElement("button");
            priceBtn.textContent = "Show Price";

            priceBtn.addEventListener("click", () => {
                alert(product.price);
            });

            
            const categoryBtn = document.createElement("button");
            categoryBtn.textContent = "Show Category";

            categoryBtn.addEventListener("click", () => {
                alert(product.category);
            });

    
            const detailsBtn = document.createElement("button");
            detailsBtn.textContent = "View Details";

            detailsBtn.addEventListener("click", () => {
                alert(
                    "Title: " + product.title +
                    "\nPrice: $" + product.price +
                    "\nCategory: " + product.category
                );
            });

            
            card.append(
                image,
                title,
                price,
                category,
                description,
                tag,
                priceBtn,
                categoryBtn,
                detailsBtn
            );

            productContainer.append(card);
        });
    })
    .catch((error) => {
        errorDiv.textContent = "Something Went Wrong";
        errorDiv.style.backgroundColor = "red";
        errorDiv.style.color = "white";
        errorDiv.style.textAlign = "center";

        console.log(error);
    })
    .finally(() => {
        finalDiv.textContent =
            "Product Request Completed Successfully"
    });