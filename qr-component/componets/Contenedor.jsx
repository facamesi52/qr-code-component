import React from "react";
const Contenedor = () => {
    return(
        <div>
            <main className="card">
                <img src="https://github.com/makeitrealcamp/top-v30/blob/main/challenges/qr-code-component/images/image-qr-code.png?raw=true" 
                alt="codigo qr" 
                className="card__img" 
                />
                <div className="card__text">
                    <h2>Improve your front-end skills by building projects</h2><br />
                    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>

            </main>
        </div>
    );
};
 
export default Contenedor;