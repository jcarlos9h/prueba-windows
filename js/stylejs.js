
const productos = [
{   id: 1,
    nombre: "bate de Beisbol", 
    img: "img/beisbol/bat-de-beisbol-madera-louisville-slugger-mlb-prime-ks12-kyle-schwarber-wood-natural.jpg",
    precio: 15000,
    descripcion:"Bate de Beisbol",
    stock: 5
    },

    {   id: 1,
        nombre: "Bate de Aluminio", 
        img: "img/beisbol/D_NQ_NP_889516-MLA49914859169_052022-V.jpg",
        precio: 15000,
        descripcion:"Bate de Beisbol de aluminio",
        stock: 3
        },

        {   id: 1,
            nombre: "Raq. Ping Pong", 
            img: "img/otros/D_NQ_NP_727411-MLA48184826950_112021-O.webp",
            precio: 15000,
            descripcion:"raquetas Aghada",
            stock: 3
            },

            {   id: 1,
                nombre: "Balon de futbol", 
                img: "img/futbol/28530d07245942fc944dae680084fb30_9366.webp",
                precio: 15000,
                descripcion:"Balon Adidas",
                stock: 3
                },

                {   id: 1,
                    nombre: "Zapatos de Futbol", 
                    img: "img/futbol/D_NQ_NP_688473-MLC31891763936_082019-O.jpg",
                    precio: 15000,
                    descripcion:"Pumas evo speed",
                    stock: 3
                    },

                    {   id: 1,
                        nombre: "Raq. Ping Pong", 
                        img: "img/otros/D_NQ_NP_727411-MLA48184826950_112021-O.webp",
                        precio: 15000,
                        descripcion:"raquetas Aghada",
                        stock: 3
                        },
                        {   id: 1,
                            nombre: "Balon de Boleivol", 
                            img: "img/otros/descarga.jpg",
                            precio: 15000,
                            descripcion:"Balon Pinter",
                            stock: 3
                            },
                            {   id: 1,
                                nombre: "Zapatos de Futbol", 
                                img: "img/futbol/D_NQ_NP_688473-MLC31891763936_082019-O.jpg",
                                precio: 15000,
                                descripcion:"Pumas evo speed",
                                stock: 3
                                },
                                {   id: 1,
                                    nombre: "Remera de Basket", 
                                    img: "img/basket/774fac99-3305-4c61-b89c-092de9c3192a.webp",
                                    precio: 15000,
                                    descripcion:"Remera de Lakers",
                                    stock: 3
                                    },
                                    {   id: 1,
                                        nombre: "Balon Spalding", 
                                        img: "img/basket/pelota-basquet-spalding-nba-33-oversize-marron-34004s074878001-1.jpg",
                                        precio: 15000,
                                        descripcion:"Balon de Baloncesto",
                                        stock: 3
                                        },
                    
]

//creamos una constante para seleccionar el div del html

const contenedorProductos= document.getElementById('contenedor');

productos.forEach((producto)=>{
const div =document.createElement('div');
 div.classList.add('producto');
 div.innerHTML= `
 <img class="imagen" src=${producto.img} alt="dañada" >
 <h3>${producto.nombre}</h3>
 <p>${producto.descripcion}</p>
 <p class="precio">${producto.precio}</p>
<button id="agregar ${producto.id}" class="boton-agregar"> Agregar <i class =" fas fa-shopping-cart"></i></button> 
 `
 contenedorProductos.appendChild(div);



})