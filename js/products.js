function loadProducts() {
    var count = 0;
    var template = document.querySelector("#productTemplate");
    var products = document.querySelector(".products");
    var row = createRow(products);
    
    $.ajax({
        url: './json/products.json',
        method: 'GET',
        dataType: 'json',
        success: function(data){
            $.each(data.products, function(i, item){
                template.content.querySelector("img").src = item["thumbnail"];
                template.content.querySelector("#brand").textContent = item["brand"];
                template.content.querySelector("#model").textContent = item["model"];
                template.content.querySelector("#movement").textContent = item["movement"];
                template.content.querySelector("#size").textContent = item["size"];
                template.content.querySelector("#price").textContent = item["price"];
                
                var clone = document.importNode(template.content, true);

                // brand identification
                if (item["brand"] == "Hamilton") {
                   clone.querySelector("#topLevel").classList.add("hamilton");
                }
                else if (item["brand"] == "Dan Henry") {
                    clone.querySelector("#topLevel").classList.add("dan-henry");
                }
                else if (item["brand"] == "Seiko") {
                    clone.querySelector("#topLevel").classList.add("seiko");
                }
                else if (item["brand"] == "Buler") {
                    clone.querySelector("#topLevel").classList.add("buler");
                }
                else if (item["brand"] == "Longines") {
                    clone.querySelector("#topLevel").classList.add("longines");
                }
                else if (item["brand"] == "Le Monde") {
                    clone.querySelector("#topLevel").classList.add("le-monde");
                }
                else if (item["brand"] == "Omega") {
                    clone.querySelector("#topLevel").classList.add("omega");
                }
                else if (item["brand"] == "Bulova") {
                    clone.querySelector("#topLevel").classList.add("bulova");
                }
                else if (item["brand"] == "Tag Heuer") {
                    clone.querySelector("#topLevel").classList.add("tag-heuer");
                }
                else if (item["brand"] == "Nivada Grenchen") {
                    clone.querySelector("#topLevel").classList.add("nivada-grenchen");
                }
                else if (item["brand"] == "Rado") {
                    clone.querySelector("#topLevel").classList.add("rado");
                }

                // movement type identification
                if (item["movement"] == "Automatic") {
                    clone.querySelector("#topLevel").classList.add("automatic");
                }
                else if (item["movement"] == "Handwind") {
                    clone.querySelector("#topLevel").classList.add("handwind");
                }
                else if (item["movement"] == "Mechaquartz") {
                    clone.querySelector("#topLevel").classList.add("mechaquartz");
                }
                else if (item["movement"] == "Quartz") {
                    clone.querySelector("#topLevel").classList.add("quartz");
                }

                // age identification
                if (item["age"] == "Modern") {
                    clone.querySelector("#topLevel").classList.add("modern");
                }
                else if (item["age"] == "Vintage") {
                    clone.querySelector("#topLevel").classList.add("vintage");
                }
                row.appendChild(clone);
                count++;
            });
        }
    });
}

function createRow(products) {
    var row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("content");
    products.appendChild(row);
    return row;
}

function filter(query) {
    var productContainer = document.querySelector(".products");
    var allProducts = productContainer.getElementsByClassName("product");

    if (query == "all") {
        resetFilter(allProducts);
        document.querySelector("#allWatches").style.textDecoration = "underline";
    }
    else if (query == "automatic") {
        resetFilter(allProducts);
        for (var i = 0; i < allProducts.length; i++) {
            if (!allProducts[i].classList.contains("automatic")) {
                allProducts[i].style.display = "none";
            }
        }
        document.querySelector("#automaticWatches").style.textDecoration = "underline";
    }
    else if (query == "handwind") {
        resetFilter(allProducts);
        for (var i = 0; i < allProducts.length; i++) {
            if (!allProducts[i].classList.contains("handwind")) {
                allProducts[i].style.display = "none";
            }
        }
        document.querySelector("#handwindWatches").style.textDecoration = "underline";
    }
    else if (query == "quartz") {
        resetFilter(allProducts);
        for (var i = 0; i < allProducts.length; i++) {
            if (!allProducts[i].classList.contains("quartz") && !allProducts[i].classList.contains("mechaquartz")) {
                allProducts[i].style.display = "none";
            }
        }
        document.querySelector("#quartzWatches").style.textDecoration = "underline";
    }
    else if (query == "modern") {
        resetFilter(allProducts);
        for (var i = 0; i < allProducts.length; i++) {
            if (!allProducts[i].classList.contains("modern")) {
                allProducts[i].style.display = "none";
            }
        }
        document.querySelector("#modernWatches").style.textDecoration = "underline";
    }
    else if (query == "vintage") {
        resetFilter(allProducts);
        for (var i = 0; i < allProducts.length; i++) {
            if (!allProducts[i].classList.contains("vintage")) {
                allProducts[i].style.display = "none";
            }
        }
        document.querySelector("#vintageWatches").style.textDecoration = "underline";
    }
    else if (query == "parts") {
        resetFilter(allProducts);
        for (var i = 0; i < allProducts.length; i++) {
            if (!allProducts[i].classList.contains("parts")) {
                allProducts[i].style.display = "none";
            }
        }
        document.querySelector("#watchParts").style.textDecoration = "underline";
    }
}

function resetFilter(products) {
    for (var i = 0; i < products.length; i++) {
        products[i].style.display = "block";
    }
    document.querySelector("#allWatches").style.textDecoration = "none";
    document.querySelector("#automaticWatches").style.textDecoration = "none";
    document.querySelector("#handwindWatches").style.textDecoration = "none";
    document.querySelector("#quartzWatches").style.textDecoration = "none";
    document.querySelector("#vintageWatches").style.textDecoration = "none";
    document.querySelector("#modernWatches").style.textDecoration = "none";
    document.querySelector("#watchParts").style.textDecoration = "none";
}