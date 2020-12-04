import React, { useState } from 'react';
import './style.scss';
export default function LoginPage() {
    return (
        <>
            <div className="wrap">
                <div class="wrapper_login fadeInDown">
                    <div id="formContent">
                        <div class="fadeIn first">
                            <img src="https://icon-library.com/images/0083f9a69c_904.png" id="icon" alt="User Icon" style={{ width: 100 }} />
                        </div>
                        <form>
                            <input type="text" id="login" class="fadeIn second" name="name" placeholder="Name" required />
                            <input type="text" id="password" class="fadeIn third" name="password" placeholder="Password" required />
                            <input type="submit" class="fadeIn fourth" value="LogIn" />
                        </form>
                        <div id="formFooter">
                            <a class="underlineHover" href="#">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}