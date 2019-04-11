class ProductList {
    constructor (productsUrl, renderContainer) {
        fetch(productsUrl)
            .then(result => result.json() )
            .then(products => {
                this.products = products;
                this.renderProducts(renderContainer, products);
                this.addEventListeners();
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
                            <p>${product.price}</p>
                            <form>
                                <button>Buy</button>
                            </form>
                        </div>
                  </div>
                 </article>`;
        });
        container.html(productListDomString);
    }
    addEventListeners() {
        $('#productInfoModal').on('show.bs.modal', event => {
            const button = $(event.relatedTarget); // Button that triggered the modal
            const id  = String(button.data('id')); // Extract info from data-* attributes
            const product = this.getProductById(id);
            const modal = $('#productInfoModal');
            modal.find('.modal-body .card-img-top')
                .attr('src', 'img/products/'+product.image)
                .attr('alt', product.title);
            modal.find('.modal-body .card-title').text(product.title);
            modal.find('.modal-body .card-text').text(product.description);
            modal.find('button.buy')
                .text(`${product.price} - Buy`)
                .data('id', id);
        });
        $('.card.product button.buy, #productInfoModal button.buy').click( event => {
            const button = $(event.target);
            const id  = button.data('id'); 
            this.cart.addProduct(id);
            window.showAlert('Product added to cart');
        });
    }
}