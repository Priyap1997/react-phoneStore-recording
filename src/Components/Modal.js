import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../Context'
import {ButtonContaineer} from './Button'
import {Link} from 'react-router-dom'
export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal}=value;
                    const{img,title,price}=value.modalProduct;
                    if(!modalOpen)
                    {return null;}
                    else{
                       return <ModalContainer>
                          <div className="container">
                              <div className="row">
                                  <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize" id="modal">
                                      <h5>item added to cart</h5>
                                       <img src={img} className="img-fluid" alt="product"></img>
                                       <h5>{title}</h5>
                                       <h5 className="text-muted">price :${price} </h5>
                                       <Link to="/">
                                           <ButtonContaineer onClick={()=>closeModal()}>
                                                Continue shopping
                                           </ButtonContaineer>
                                       </Link><br/>
                                       <Link to="/cart">
                                           <ButtonContaineer cart onClick={()=>closeModal()}>
                                                Go to Cart
                                           </ButtonContaineer>
                                       </Link>
                                  </div>
                              </div>
                              
                          </div>
                        </ModalContainer>
                    }
                }}
            </ProductConsumer>
        )
    }
}
const ModalContainer=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite) !important;
}
`