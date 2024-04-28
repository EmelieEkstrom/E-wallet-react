import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Addcard.css';

function AddCard(props) {
    const { setAmount, amount } = props;
    const navigate = useNavigate();

    const [numberInput, setNumberInput] = useState('');
    const [expirityInput, setExpirityInput] = useState('');
    const [cvcInput, setCvcInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [vendor, setVendor] = useState(''); 

    function handleSubmit(event) {
        event.preventDefault(); 
       
        console.log("Submitted", numberInput, expirityInput, cvcInput, nameInput, vendor);
    
    }

    function CardInformation() {
        navigate(`/Addcard/${props.card}`);
    }

    function handleSubmit(event) {
        event.preventDefault(); 

        console.log("Submitted", numberInput, expirityInput, cvcInput, nameInput, vendor);
    }

function SelectVendor(vendor) {
//För att välja Bitcoin Inc välj en annan vendor först och sen Bitcoin då den är inställd på default vendor.*/

    if (vendor) {
        vendor = "Bitcoin-inc";
    } else if (vendor) {
        vendor = "chip-dark";
    } else if (vendor) {       
         vendor = "chip-light";

    } else if (vendor) {
        vendor="vendor-bitcoin"; 
           
    } else if(vendor) { 
        vendor= "vendor-blockchain";
            
    } else if(vendor) { 
        vendor= "vendor-evil";
            
    } else if(vendor) { 
        vendor= "vendor-ninja";
    }        
        
}

console.log(SelectVendor);

    return (
    <body>    
    <main>  
        <section className="card-info">
    
            <img src="src/assets/chip-dark.svg" alt="Chip Logo"
            className="chip-logo"
            />
            <div>
                <p>{numberInput}</p>
                <p>{nameInput}</p>
                <p>{cvcInput}</p>
                <p>VALID THRU{expirityInput}</p>
                <p> {vendor} </p>
            </div>
    
        </section> 
        <div className="container">
            <h2>Add a new bank card</h2>

            <div className="card-info">
            
            <form onSubmit={handleSubmit}>   
                
                    
                <input
                    className="card-number"
                    placeholder="Enter card number"
                    value={numberInput}
                    onChange={(e) => setNumberInput(e.target.value)} //Input value
                />  
                <input 
                    className="card-expirity"
                    placeholder="Enter expirity date"
                    value={expirityInput}
                    onChange={(e) => setExpirityInput(e.target.value)} //expirity value 
                />
                    <input
                    className="card-cvc"
                    placeholder="Enter cvc"
                    value={cvcInput}
                    onChange={(e) => setCvcInput(e.target.value)} //input value
                />

                <input 
                className="setNameInput"
                placeholder= "Enter name"
                value= {nameInput}
                onChange={(e) => setNameInput(e.target.value)} //name input

                />

                <label htmlFor="vendor">Vendor</label>  
                <select id="vendor" name="vendor" value={vendor} onChange={(e) => setVendor(e.target.value)}>
                    <option value="Bitcoin-Inc">BITCOIN INC</option>
                            <option value="Ninja-Bank">NINJA BANK</option>
                            <option value="Block-chain-inc">BLOCK CHAIN INC</option>
                            <option value="Evil corp">EVIL CORP</option>
                        </select>
                        <button type="submit" className="add-card">Add Card</button>
                    
                </form>         
            </div>

        </div>
    </main>
    </body>
    );
}

export default AddCard;
