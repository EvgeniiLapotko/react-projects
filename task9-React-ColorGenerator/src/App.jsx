import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const App = () => {
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values("#f15025").all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };
    return (
        <main>
            <section className="container">
                <h3 className="title">color generation</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="#f15025"
                        className={`${error ? "error" : null} inpit-value`}
                    />
                    <button className="btn" type="submit">
                        Submit
                    </button>
                </form>
            </section>
            <section className="colors">
                {list.map((color, index) => {
                    return (
                        <SingleColor
                            key={index}
                            {...color}
                            index={index}
                            hexColor={color.hex}
                        />
                    );
                })}
            </section>
        </main>
    );
};

export default App;