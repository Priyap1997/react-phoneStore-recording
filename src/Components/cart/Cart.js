import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from "./CartColumns"
import CartList from "./CartList"
import EmptyCart from "./EmptyCart"
import CartTotal from "./CartTotal"
import {ProductConsumer} from '../../Context'
export default class Cart extends Component {
    render() {
        return (
           <section>
               <ProductConsumer>
                   {
                       value=>{
                           const {cart}=value;
                           if(cart.length>0){
                             return(
                                 <React.Fragment>
                                     <Title name="your" title="cart"> </Title>
                                       <CartColumns></CartColumns>
                                      <CartList value={value} ></CartList>
                                      <CartTotal value={value}></CartTotal>
                                 </React.Fragment>
                             )
                           }else{
                           return <EmptyCart/>;
                           }
                       }
                   }
               </ProductConsumer>
            </section>
        )}
}
