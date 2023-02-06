import React from 'react'
import data1 from "../../data1.js"
 
// const Component2 = ({ brand }) => {
//     const brandData = data1.filter(item => item.brand === brand)[0];
//     return (
//       <div>
//         {brandData.consoles.map(console => (
//           <p key={console}>{console}</p>
//         ))}
//       </div>
//     );
//   };

const getConsoles = (brand) => {
    const brandData = data1.filter(item => item.brand === brand)[0];
    return brandData ? brandData.consoles.map(console => <p key={console}>{console}</p>) : [];
};

  function ConsoleGridCard(props) {

    const consoles = getConsoles(props.brand);
    return (
        <div>
            <p>{props.brand}</p>
            <p>{consoles}</p>
        </div>
    )
}

export default ConsoleGridCard