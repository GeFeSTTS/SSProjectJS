class ProductList {
    constructor (productsUrl, renderContainer) {
        fetch(productsUrl)
            .then(result => result.json() )
            .then(products => {
                this.products = products;
                this.renderProducts(renderContainer, products);
            })
    }
    getProductById(id) {
        return this.products.find(el => el.id === id);
    }
    renderProducts(container, products) {
        let productListDomString = ''
        products
        .forEach(product => {
            productListDomString += 
                `<article class="post-${product.id}">
                  <div class="img-wrap">
                    <img src="./assets/img/${product.image}" 
                        alt="${product.title}">
                    <div class="watch-title">
                        <h2>${product.title}</h2>
                    </div>
                  </div>
                  <div class="post-wrap">
                        <div class="info">
                            <p>This model is based on street fashion motifs, decorated with distinctive black and rose
                                gold coloring. The black coloring of this model is a glossy black finish, while the
                                face is accented with rose gold coloring.</p>
                        </div>
                        <div class="price">
                            <p>${product.price} ${product.currency}</p>
                            <form>
                                <button>Buy</button>
                            </form>
                        </div>
                  </div>
                 </article>`;
        });
        container.html(productListDomString);
    }
}