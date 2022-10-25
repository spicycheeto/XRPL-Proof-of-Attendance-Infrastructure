import React, {useEffect, useState} from 'react'
import axios from 'axios'



const App = () => {

const [account, setAccount] = useState("")
const [radioButton, setRadioButton] = useState("mintNFT")

const handleChange = (event) => {


  setAccount(event.target.name)

}



const getData = async() => {
  const res = await axios.get('/api/mintNFT')
  setAccount(res.data)
  console.log(res)
}



useEffect(() => {
  getData()
}, [])


const formGenerator = () => {
  

  
if(radioButton == "mintNFT"){
  return(
    <form>

    <div class="user-box">
      <input type="text" name="" required="" />
      <label>Account Number</label>
    </div>


    <div class="user-box">
      <input type="text" name="" required="" />
      <label>Secret </label>
    </div>

    <div class="user-box">
      <input type="number" name="" required="" value="0" />
      <label># of Event tickets / tokens to generate</label>
    </div>

    <div class="user-box">    
      <input type="float" name="" required="" />
      <label>Initial Sell Offer</label>
    </div>

    <div class="user-box">    
      <input type="text" name="" required="" />
      <label>Event Title</label>
    </div>

    <div class="user-box">    
      <input type="text" name="" required="" />
      <label>*Image File*</label>
    </div>


    <h2>Metadata (optional)</h2>
    <div class="user-box">
      <input type="number" name="" required="" value="0" />
      <label>Date of Event </label>
    </div>

    <div class="user-box">
      <input type="number" name="" required="" value="0" />
      <label>Location</label>
    </div>

    <div class="user-box">    
      <input type="text" name="" required="" />
      <label>Time</label>
    </div>

  

  <div class="user-box">
      <input type="checkbox" name="" required="" />
      <label>Unique QR code</label>
    </div>
    
    <div class="user-box">
      <input type="checkbox" name="" required="" value="0" />
      <label>Unique Taxon value</label>
    </div>
    
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  )
  }
}


  return (
<div>

<div style={{color: "white"}}>
| Find An Event | <br></br>
| Collect Event NFT | <br></br>
| How to mint an Event NFT | <br></br> 

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>


<input
                type="radio"
                name="address"
           //     value={result.ADDRESS}
            //    checked={this.state.address === result.ADDRESS}
            //    onChange={this.onAddressChanged}
></input>Burn NFT
<br></br>

  <input
                type="radio"
                name="address"
           //     value={result.ADDRESS}
            //    checked={this.state.address === result.ADDRESS}
            //    onChange={this.onAddressChanged}
></input>Burn All NFT's
<br></br>

  <input
                type="radio"
                name="address"
           //     value={result.ADDRESS}
            //    checked={this.state.address === result.ADDRESS}
            //    onChange={this.onAddressChanged}
></input>Mint Event NFT's

<br></br>


</div>
<div class="login-box">
  <h2>Event Token Generator</h2>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  
  

  {formGenerator()}

</div>


<div class="info-box">
  
  <form>
    <div class="user-box">
      <input type="text" name="" required="" />
      <label>Account Number</label>
    </div>

  </form>
</div>
 
</div>
 
 )
}
// {users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>)}

/*

<html>
    
    <label for="fname">Account Number:</label>
    <input type="text" name="account" onChange={handleChange} />
    {account}
  
    </html>


const [inputs, setInputs] = useState([])

const handleRegistration = (data) => console.log(data);
const { register, handleSubmit } = useForm();


const handleChange = (event) => {
  const account = event.target.account;
  const flag = event.target.flag;
  const value = event.target.value;
  setInputs(values => ({account,flag,value}))
}

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(inputs);
}


const getData = async() => {
  const res = await axios.get('/api/mintNFT')
  setInputs(res.data)
  console.log(res)
}



useEffect(() => {
  getData()
}, [])
 */
export default App

