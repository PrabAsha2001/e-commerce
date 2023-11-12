
const product=[
    {
        id:1,
        image: 'images/image01.webp',
        title: 'product',
        price: '$570'
    },
    {
        id:2,
        image: 'images/image02.webp',
        title: 'product',
        price: '$570'
    
    },
    {
        id:3,
        image: 'images/image03.webp',
        title: 'product',
        price: '$570'
    },
    {
        id:4,
        image: 'images/image04.webp',
        title: 'product',
        price: '$570'
    }
    ,{
        id:5,
        image: 'images/image01.webp',
        title: 'product',
        price: '$570'
    },
    {
        id:6,
        image: 'images/image02.webp',
        title: 'product',
        price: '$570'
    
    },
    {
        id:7,
        image: 'images/image03.webp',
        title: 'product',
        price: '$570'
    },
    {
        id:8,
        image: 'images/image04.webp',
        title: 'product',
        price: '$570'
    }
    ];
    
    const categories=[...new Set(product.map((item)=>{
        return item
    }))]
    
    let cart = document.getElementById('root')
    cart.innerHTML=categories.map((item)=>{
        var{image,title,price}=item;
        return(
            `<div class="box">
                <div class="img-box">
                    <img src=${image}></img>
                </div>
                <div class="left">
                    <p>${title}</p>
                    <h2>${price}</h2>
                    <button>Add to cart</button>
                </div>
            </div>`
        )
    }).join('')