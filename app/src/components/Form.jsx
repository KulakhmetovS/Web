import React, {useState} from 'react';
import axios from 'axios';
import classes from './modules/Form.module.css';

const Form = () => {

  const [inputLogin, setLogin] = useState('');
  const [inputPassword, setPassword] = useState('');

  const SendToServer = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', {
      login: {inputLogin},
      password: {inputPassword},
    }).then(function(response){console.log(response.data)})
  }

  return (
    <div className={classes.main}>
      <div className={classes.picture}>
      </div>
      <div className={classes.FormContainer}>
        <div className={classes.Form}>
          <div className={classes.LoginText}>Вход в вашу учётую запись</div>
          <form className={classes.data}>
            <input type="text" value={inputLogin} onChange={e => setLogin(e.target.value)} className={classes.login} placeholder="Почта/Логин" />
            <input type="text" className={classes.password} value={inputPassword} onChange={e => setPassword(e.target.value)} placeholder="Пароль" />
            <button className={classes.log_in} onClick={SendToServer}>Войти</button>
          </form>
          <button className={classes.register}>Зарегестрироваться</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
