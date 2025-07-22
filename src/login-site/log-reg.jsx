import React from "react";
import "./log-reg.css";


let showModal =  ()=>{
   let modals =  document.querySelectorAll(".login-modal-reg");
   for(let obj of modals){
     obj.classList.toggle("hide-log");
   }
}

let login = ()=>{
    return (
        <div className="log-reg">
            <p className="item-reg whitesmoke"><a onClick={showModal} className="upper-text whitesmoke" href="#">Вход</a></p>
         
            <div className="hide-log login-modal-reg background">
            </div>
            <div className="hide-log login-modal-reg login-mod">
                 <div onClick={showModal} className="close-reg">Close</div>
                    <h3>Вход на сайт</h3>
                   
                <div>
            
                    <form>
                        <div className="login-reg">
                            <forn action="get">
                                <div>
                                    <div>
                                        <input placeholder="Логин или email"  name="login" id="login-reg-site"></input>
                                        <input placeholder="Пароль"  name="pass" id="pass-reg-site"></input>
                                    </div>
                                    <div>
                                        <a href="#">Затерялся пароль?</a>
                                        <input name="check" type="checkbox"/>
                                        <input type="submit" value="Войти"/>
                                    </div>
                                    <div>
                                        <p>Ты еще не с нами?</p>
                                        <p><a href="#">Регистрируйся!</a></p>
                                    </div>
                                </div>
                            </forn>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default login;