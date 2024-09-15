fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => mahsulotlar(json))

const box = document.getElementById('box')

function mahsulotlar(products) {
    for (let i = 0; i < products.length; i++) {
        const div = document.createElement('div')
        const img = document.createElement('img')
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const h3 = document.createElement('h3')

        h1.textContent = 'Price:' + products[i].price + ' $'
        h2.textContent = products[i].title
        p.textContent = products[i].description;
        h3.textContent = 'Rating' + products[i].rating.rate;
        img.src = 'https://cdn-icons-png.flaticon.com/512/1381/1381552.png';
        div.classList.add('card')
        div.appendChild(img)
        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(h3)

        box.appendChild(div)
    }


}