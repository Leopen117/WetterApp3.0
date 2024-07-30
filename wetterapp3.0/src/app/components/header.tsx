import "bootstrap/dist/css/bootstrap.min.css"
interface BodyHeaderProps{
    headline: string,
    subline: string
}

function Header({headline, subline}: BodyHeaderProps) {
    return(
        <div className="d-flex flex-column align-items-center mt-5">
        <div>
            <h1 className="fw-bold">{headline}</h1>
        </div>
        <div>
            <h4 className="fw-light">{subline}</h4>
        </div>
        </div>
    )
}

export default Header