import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import {remove} from "../store/cartSlice";
import { useDispatch } from "react-redux";
import empty from "../images/empty.jpg"
import { Image } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Cart=()=>{

 const dispatch = useDispatch();
const products= useSelector(state=>state.cart);
const removeItem=(product)=>{
    dispatch(remove(product));
}
const temp= products.map(product=>(
    <div className="col-md-12" key={product.id} style={{marginBottom:"10px"}}> 
    <Card className='h-100'>
        <div className='text-center'>
       <Card.Img variant="top" src={product.image} style={{width:"100px",height:"130px"}} />
       </div>
       <Card.Body>
         <Card.Title>{product.title}</Card.Title>
         
         <Card.Title>INR {product.price}</Card.Title>
         
       </Card.Body >
       <Card.Footer className='text-center'><Button  variant="danger" onClick={()=>removeItem(product.id)} >Remove Item</Button></Card.Footer>
     </Card> 
     </div>

 ));
    return (
        <Container>
        
        {products.length> 0 ?   <div className="row">
        {temp} </div>
        :  <Row className="d-flex justify-content-center align-items-center">
        <Col xs={6} md={4} className="text-center">
          <Image src={empty} roundedCircle />
          <h2>Hey, it feels so light!</h2>
          <p>There is nothing in your Bag. Let's add some items!</p>
        </Col>
      </Row>
        
 }
 </Container>
       
    )
} 
export default Cart;