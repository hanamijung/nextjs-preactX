import { h } from 'preact'

const Index = () => {
    return(
        <div className="content">
          <h1>Anilive</h1>
          <p><span>More info </span><a href="https://www.facebook.com/anilive.th/" target="_blank">here</a><span>.</span></p>
          <style jsx>{`
        .contain {
          margin: 50px;
        }
        p {
          color: blue;
        }
      `}</style>
        </div>
    )
}

export default Index
