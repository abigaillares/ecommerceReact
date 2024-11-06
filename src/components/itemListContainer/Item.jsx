import { Link } from "react-router-dom"

const Item = ({ product }) => {

  return (
    <div className="item">
      <Link to={ "/detail/" + product.id } className="button-detail" >
      <img src={product.image} className="img-item" alt="" width={100} />
      <p className="text-item">{product.name}</p>
      <p className="text-item">${product.price}</p>
      </Link>
    </div>
  )
}
export default Item