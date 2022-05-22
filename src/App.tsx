import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <nav
                style={{
                    padding: "1rem 0",
                }}
            >
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link> | {" "}
                <Link to="/animation">Animation</Link>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default App
