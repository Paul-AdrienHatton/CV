import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #e4e5eb;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --btn-hover:rgba(0, 123, 255,0.8);
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --box-shadow:  5px 5px 10px #bebebe,
             -5px -5px 10px #ffffff;
    --inset-box-shadow: inset 2px 2px 5px #bebebe,
            inset -2px -2px 5px #ffffff;
    --particles:#10121a;
}
.dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --btn-hover: #F1F1F1;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color:#131626;
    --background-light-color:#10121A;
    --background-light-color-2: rgba(3,127,255,.3);
    --btn-hover:rgba(0, 123, 255,0.5);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --box-shadow: 5px 5px 9px #06070a,
             -5px -5px 9px #1a1d2a;
    --inset-box-shadow: inset 2px 2px 5px #06070a,
            inset -2px -2px 5px #1a1d2a;
    --particles: #f1f1f1;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
}
body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: all .4s ease-in-out;
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}
textarea{
    max-width: 100%;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}
h1{
    font-size: 4rem;
    color: var(--white-color);
    span{
        font-size: 4rem;
        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }
    @media screen and (max-width: 768px){
        font-size: 3rem;
    }
}
span{
    color: var(--primary-color);
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
}
.u-margin-bottom{
    margin-bottom: 4rem;
}
.light-dark-mode{
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--background-light-color-2);
    width: 4.5rem;
    height: 2rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      color: var(--white-color);
    }
  }
  //Nav Toggler
  .ham-burger-menu{
      position: fixed;
      right: 5%;
      top: 3%; 
      display: block;
      z-index: 15;
      svg{
          font-size: 3rem;
      }
    }
    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
    @media screen and (max-width:1200px){
    .ham-burger-menu{
        display: block;
    }
  }
`;

export default GlobalStyle;
