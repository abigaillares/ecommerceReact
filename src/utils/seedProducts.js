import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore"

const products  = [
    {
      id: "a1001",
      name: "Escritorio de oficina",
      description: "Escritorio moderno con espacio para computadora y almacenamiento.",
      price: 12000,
      stock: 10,
      image: "/img/escritorio.png",
      category: "escritorio"
    },
    {
      id: "a1002",
      name: "Mesa de luz",
      description: "Mesa de luz de madera con dos cajones y acabado natural.",
      price: 5500,
      stock: 15,
      image: "/img/mesaDeLuz.png",
      category: "mesa"
    },
    {
      id: "a1003",
      name: "Modular para living",
      description: "Modular moderno con espacio para libros y decoración.",
      price: 18000,
      stock: 5,
      image: "/img/modular.png",
      category: "Living"
    },
    {
      id: "a1004",
      name: "Rack para TV",
      description: "Rack minimalista para TV de hasta 55 pulgadas.",
      price: 9500,
      stock: 7,
      image: "/img/rackDeTV.png",
      category: "Living"
    },
    {
      id: "a1005",
      name: "Mesa de comedor",
      description: "Mesa de comedor de madera maciza para 6 personas.",
      price: 22000,
      stock: 3,
      image: "/img/mesaDeComedor.png",
      category: "mesa"
    },
    {
      id: "a1006",
      name: "Silla de madera",
      description: "Silla ergonómica de madera con asiento acolchado.",
      price: 4500,
      stock: 20,
      image: "/img/silla.png",
      category: "sillas"
    }
  ];
 
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        resolve(products)
      }, 2000)
    })
  }
  
  const getProduct = (idProduct) => {
    return new Promise( (resolve)=> {
      setTimeout(()=> {
        const product = products.find( (product)=> product.id === idProduct )
        resolve(product)
      }, 2000)
    })
  }

const seedProducts = () => {
  const productsRef = collection(db, "products")
  products.map(( { id, ...dataProduct } )=> {
    addDoc(productsRef, dataProduct)
  })

  console.log("productos subidos")
  return
}

seedProducts()