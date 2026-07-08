fetch("https://fakestoreapi.com/products")

.then(res => res.json())

.then(products => {

    displayProducts(products);

    document.getElementById("search").addEventListener("keyup", filterProducts);

    document.getElementById("category").addEventListener("change", filterProducts);

    document.getElementById("price").addEventListener("keyup", filterProducts);

    function filterProducts(){

        let search=document.getElementById("search").value.toLowerCase();

        let category=document.getElementById("category").value;

        let price=document.getElementById("price").value;

        let data="";

        let count=0;

        products.forEach(product=>{

            let matchTitle=product.title.toLowerCase().includes(search);

            let matchCategory=(category=="all" || product.category==category);

            let matchPrice=(price=="" || product.price<=price);

            if(matchTitle && matchCategory && matchPrice){

                count++;

                let desc=product.description;

                if(desc.length>100){
                    desc=desc.substring(0,100)+" Read More...";
                }

                data+=`

                <div class="card">

                    <img src="${product.image}">

                    <h3>${product.title}</h3>

                    <p><b>Category :</b> ${product.category}</p>

                    <p><b>Price :</b> ₹${product.price}</p>

                    <p><b>Rating :</b>  ${product.rating.rate}</p>

                    <p>${desc}</p>

                    <button>Buy Now</button>

                </div>

                `;

            }

        });

        document.getElementById("count").innerHTML="Total Products : "+count;

        if(count==0){

            document.getElementById("products").innerHTML="<h2 class='noProduct'>No Products Found</h2>";

        }

        else{

            document.getElementById("products").innerHTML=data;

        }

    }

    function displayProducts(products){

        let data="";

        products.forEach(product=>{

            let desc=product.description;

            if(desc.length>100){
                desc=desc.substring(0,100)+" Read More...";
            }

            data+=`

            <div class="card">

                <img src="${product.image}">

                <h3>${product.title}</h3>

                <p><b>Category :</b> ${product.category}</p>

                <p><b>Price :</b> ₹${product.price}</p>

                <p><b>Rating :</b>  ${product.rating.rate}</p>

                <p>${desc}</p>

                <button>Buy Now</button>

            </div>

            `;

        });

        document.getElementById("count").innerHTML="Total Products : "+products.length;

        document.getElementById("products").innerHTML=data;

    }

})

.catch(()=>{

    document.body.innerHTML=`

    <div class="error">

    <h1> Unable to Load Products</h1>

    <p>Please try again later.</p>

    </div>

    `;

});
