import React,{ useState } from "react";
const Navigation = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    console.log(dialogOpen);
    return (
        <nav className="container">
            <div className="logo"></div>
            <ul>
                <li href="#">Home</li>
                <li href="#">About</li>
                <li href="#">Contant</li>
                <li href="#">Product</li>
                <li href="#">Location</li>
            </ul>
                <button type="button" style={{cursor: 'pointer'}} onClick={() => {
                    setDialogOpen(true);
                }}>Login</button>

            {
                dialogOpen &&
                <div className="containerbox">
                    <div className="closeIcon">
                        <button className="closeIconButton" type="button" onClick={() => {
                            setDialogOpen(false);
                        }}>X</button>
                    </div>
                    <label for="uname">Name</label>
                    <input type="text"name="uname" id="name" required></input>
                    <label for="uname">Lastname</label>
                    <input type="text"name="uname" id="lastname"required></input>
                    <label for="uname">Username</label>
                    <input type="text"name="uname" id="username"required></input>
                    <label for="uname">Password</label>
                    <input type="password"name="password" id="password"required></input>
                    <div className="button">
                        <button type="button" onClick={() => {
                            //submit function
                        }}>Sumbit</button>
                    </div>
                </div> 
            }   
        </nav >

    );

};
export default Navigation;