import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function AddProducts() {
  const [prodname, setProdName] = useState("");
  const [prodprice,SetProdPrice]=useState("")
  const [imag,SetImag]=useState("")
  var products=[{}];
  return (
    <>
    <form>
      {/* <label>Enter your name:
        <input
          type="text" value={name}
          onChange={(e) =>  setName(e.target.value)}
          
        />
       

      </label>
      <label>Enter your password:
        <input
          type="password" value={pass}
          onChange={(e) =>  SetPass(e.target.value)}
          
        />
       

      </label> */}
      <div className="form-control">
        <h2 ><span className="strong">add_product </span> </h2>
          <div className="group">
            <input type="text" name="prod-name" id="prod-name" value={prodname} placeholder="product name"  onChange={(e) =>  setProdName(e.target.value)}/>
          </div>
          <br></br>

          <div className="container">
            <input type="text" name="prod-price" id="prod-price"  value={prodprice} placeholder="price" onChange={(e) =>  SetProdPrice(e.target.value)}/>
          </div>
<br></br>


          <div class="container">
            <input type="file" name="imageInput" id="imageInput"   placeholder="choose image" accept="image/*"/>
          </div>

</div>
    </form>
    <br>
    </br>
    <div>
    <button className='btn btn-primary' label='show'   onClick={()=>{
           
        
        //    //alert(name+"passowrd is"+pass);
           products.push([],{'prod_name':prodname,'prod_price':prodprice});
           localStorage.setItem('products',JSON.stringify(products));       
         }
           
        } >
            show
        </button>
       
    </div>
    </>
  )
}
export default AddProducts;