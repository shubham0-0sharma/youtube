import { AppContext } from "./context/contextApi";
import { Header, Feed, SearchResults } from "./components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import VideoDetails from "./components/VideoDetails";

function App() {
    return (
        // ? getting a Context.Provider element from AppContext component and all the childers are getting Passed as a props
        <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full ">
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Feed />} />
                        <Route
                            path="/searchResult/:searchQuery"
                            element={<SearchResults />}
                        />
                        <Route path="/video/:id" element={<VideoDetails />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    );
}
export default App;
