import React from "react";
import "../reg-site/reg.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";


let change = ()=>{
   let modal = document.querySelector(".modal-window-reg");
   modal.classList.toggle("hide-reg");
   let obj = document.querySelector(".modal-window-background-reg");
   obj.classList.toggle("hide-reg");
}
let reg = ()=>{
   return(<div>
      <p><a onClick={change} className="upper-text whitesmoke" href="#">Регистрация</a></p>
      <div className="modal-window-background-reg hide-reg">

      </div>
      <div className="modal-window-reg hide-reg">
         <div className="speed-reg">
         <span >Быстрая регистрация</span>
         <span className="close-registration" onClick={change}>Close</span>
         </div>
         <hr/>
         <form method="get" className="form-reg">
            <div>
               <label>Твой email <span className="star">*</span></label>
               <input className="form-control" type="input" name="email"/>
               <p className="error error-message-reg"></p>
            </div>
            <div>
               <label>Твой логин <span className="star">*</span></label>
               <input className="form-control" type="input" name="email"/>
               <p className="error error-message-reg"></p>
            </div>
            <div>
               <label>Пароль <span className="star">*</span></label>
               <input className="form-control" type="input" name="email"/>
               <p className="error error-message-reg"></p>
            </div>
            <div>
               <input name="form-check-input rules-check-box" type="checkbox"/>
               <label for="rules-check-box"> Я согласен с <a href="#" target="_blank">правилами сайта</a></label>
            </div>
            <input className="btn-reg btn btn-primary" type="submit" value="Зарегистрироваться"/>
         </form>
         <hr/>
         <p>У тебя уже есть аккаунт?<a href="#">Заходи!</a></p>
      </div>
   </div>)
}
export default reg;