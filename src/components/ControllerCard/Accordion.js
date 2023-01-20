import React, { useState } from 'react';

const Accordion = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = index => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div>
            {data.map((brand, brandIndex) => (
                <div key={brand.brand}>
                    <button onClick={() => handleClick(brandIndex)}>
                        {brand.brand}
                    </button>
                    {activeIndex === brandIndex && (
                        <div>
                            {brand.consoles.map((console, consoleIndex) => (
                                <div key={console.name}>
                                    <h1 onClick={() => handleClick(consoleIndex)}>
                                        {console.name}
                                    </h1>
                                    {activeIndex === consoleIndex && (
                                        <div>
                                            {console.controllers.map((controller) => (
                                                <div key={controller.controller}>
                                                    {controller.details}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
