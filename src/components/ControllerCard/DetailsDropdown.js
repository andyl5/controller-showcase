import React, {useState, useEffect, useRef} from "react"
import data from "../../data"

function DetailsDropdown(props) {


    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="card-collapse">
            {/* <button onClick={handleMenuOpen}>{props.title}</button>
            {menuOpen ? (
                <p>The Gamecube Controller is for the Gamecube, released in 2001. It's considered one of the best controllers ever because of its ergonomic design and comfortability in a player's hands.</p>
            ) : null} */}

            {/* <h1>{props.title}</h1>
            <p>The is released in 2001. It's widely regarded as</p> */}

            

        </div>
    )
}

export default DetailsDropdown