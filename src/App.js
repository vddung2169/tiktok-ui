import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Following from './pages/Following';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;

                        if(route.layout === null){
                            Layout = Fragment
                        }
                        else{
                            Layout = route.layout
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
