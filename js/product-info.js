function loadProductInfo() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get("product");
    var template = document.querySelector("#productInfoTemplate");
    var products = document.querySelector(".productInfo");
    var row = createRow(products);
    
    $.ajax({
        url: "./json/products.json",
        method: "GET",
        dataType: "json",
        success: function(data){
            $.each(data.products, function(i, item){
                if (item["metadata"] == product) {
                    template.content.querySelector("img").src = item["thumbnail"];
                    template.content.querySelector("#brand").textContent = item["brand"];
                    template.content.querySelector("#model").textContent = item["model"];
                    template.content.querySelector("#movement").textContent = item["movement"];
                    template.content.querySelector("#size").textContent = item["size"];

                    var clone = document.importNode(template.content, true);
                    row.appendChild(clone);
                };
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