import { AppContext } from "./context/contextApi";
import { Header, Feed } from "./components";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
    return (
        // ! getting a Context.Provider element from AppContext component and all the childers are getting Passed as a props
        <AppContext>
            <BrowserRouter>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Feed />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    );
}
export default App;
