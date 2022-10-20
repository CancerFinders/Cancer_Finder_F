import {Link} from 'react-router-dom';

export default function Main() {
    return (
        <nav
        style={{
        height: "600px",
        padding: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        }}
        >
            <Link to="/markdown" className="main-link">
            Markdown
            </Link>

            <Link to="/progress" className="main-link">
            In progress
            </Link>
        </nav>
    )
}