import { h } from 'preact'

const Index = () => {
    return(
        <style jsx>{`
        html {

    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;

}

*,

*:before,

*:after {

    box-sizing: inherit;

}

#container {

    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.25) 100%, transparent), url("http://cdn.anilive.in.th/img/A.jpg");

    background-image: linear-gradient(rgba(0, 0, 0, 0.25) 100%, transparent), url("http://cdn.anilive.in.th/img/A.jpg");

    background-image: -webkit-linear-gradient(bottom left, rgba(0, 0, 255, 0.5), rgba(255, 0, 0, 0.75)), -webkit-linear-gradient(rgba(0, 0, 255, 0.25) 100%, transparent), url("http://cdn.anilive.in.th/img/A.jpg");

    background-image: linear-gradient(to top right, rgba(0, 0, 255, 0.5), rgba(255, 0, 0, 0.75)), linear-gradient(rgba(0, 0, 255, 0.25) 100%, transparent), url("http://cdn.anilive.in.th/img/A.jpg");

    position: relative;

    height: 100vh;

    background-size: cover;
    background-position: center;
    color: white;

    font-family: "Kanit", sans-serif;

    font-size: 20px;

    line-height: 30px;

}

.content {

    position: absolute;

    top: 50%;

    left: 50%;

    width: 100%;

    max-width: 600px;

    padding: 0 30px;

    text-align: center;

    -webkit-transform: translate(-50%, 0);

    transform: translate(-50%, 0);

    opacity: 0;

    -webkit-animation: 0.85s 0.85s forwards slide_in;

    animation: 0.85s 0.85s forwards slide_in;

}

@-webkit-keyframes slide_in {

    100% {

        -webkit-transform: translate(-50%, -50%);

        transform: translate(-50%, -50%);

        opacity: 1;

    }

}

@keyframes slide_in {

    100% {

        -webkit-transform: translate(-50%, -50%);

        transform: translate(-50%, -50%);

        opacity: 1;

    }

}

#container h1,

#container p {

    margin: 15px 0;

}

#container h1 {
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 5px;
}

#container h1:after {
    content: "";
    display: block;
    width: 180px;
    height: 3.75px;
    margin: 0 auto -1.875px;
    background-color: currentColor;
}

#container a {
    color: #fff;
}
      `}</style>
        <div className="content">
          <h1>Anilive</h1>
          <p><span>More info </span><a href="https://www.facebook.com/anilive.th/" target="_blank">here</a><span>.</span></p>
      </div>
    )
}

export default Index
