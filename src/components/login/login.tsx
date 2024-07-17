import React from 'react';
import {ThunkAppDispatch} from '../../types/action';
import {loginAction} from '../../store/api-action';
import {connect, ConnectedProps} from 'react-redux';
import {AuthData} from '../../types/auth-data';
import Header from '../header/header';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  async onLogin(authData: AuthData) {
    try {
      const response = await dispatch(loginAction(authData));
      // Обработка успешного ответа
      console.log('Login successful:', response);
    } catch (error) {
      // Обработка ошибки
      console.error('Login failed:', error);
    }
  },
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Login(props: PropsFromRedux): JSX.Element {
  const {onLogin} = props;
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form); // Собираем данные формы
    const login = formData.get('email') as string;
    const password = formData.get('password') as string;
    try {
      await onLogin({ login, password });
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed', error);
    }
  }


  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={(evt)=>{handleSubmit(evt)}}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit" >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export {Login};
export default connector(Login);
