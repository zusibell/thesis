import React from "react";
import laptop from "./laptop.jpg";
import headphones from "./headphones.jpg";
import mouse from "./mouse.jpg";
import 'utilities/baseStyles';


const App = () => {
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"left",
    }}>
        <table style={{
          width: "100%",
        }}>
            <tr> 
                <th></th>
                <th></th>
                <th>Price</th>
            </tr>
            <tr>
                <td className="w-25"><img src={headphones} width="100%"/></td>
                <td className="w-60">Over Ear Headphones <br/>
                    Quantity: 1
                </td>
                <td className="w-15">99.99€</td>
            </tr>
            <tr>
                <td className="w-25"><img src={laptop} width="100%"/></td>
                <td className="w-60">Laptop 15.6 inch Full Hd, Intel Core i5, 256GB SSD <br/>
                    Quantity: 1</td>
                <td className="w-15">499€</td>
            </tr>
            <tr>
                <td className="w-25"><img src={mouse} width="100%"/></td>
                <td className="w-60">Wired Mouse, Ergonomic Design <br/>
                    Quantity: 1</td>
                <td className="w-15">39€</td>
            </tr>
        </table>
    </div>
  )
}

export default App;

