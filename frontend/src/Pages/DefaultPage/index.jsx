import { Outlet } from "react-router-dom";

const DefaultPage = () => {
    return (
        <>
            <header>Header</header>
            <Outlet />
            <footer>Footer</footer>
        </>
    )
}

export default DefaultPage;