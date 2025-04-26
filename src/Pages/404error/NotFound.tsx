import "./NotFound.scss"
export default function NotFoundPage(){
    return(
        <>
             <div className="error-content">
    <section className="error-section">
      <div className="terminal">
        <pre className="code-block">
          <span className="prompt">$</span> <span className="command">cd /pages<br /></span>
          <span className="output">bash: cd: /pages: No such file or directory<br /></span>
          <span className="prompt">$</span> <span className="command">ls <br /></span>
          <span className="output">index.html <br /></span>
          <span className="prompt">$</span> <span className="command">cat 404.html <br /></span>
          <span className="output">Error: File not found (404)</span>
        </pre>
      </div>
      <div className="error-message">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="btn-primary">Go Back to Dashboard</a>
      </div>
    </section>
    </div>
        </>
    )
}