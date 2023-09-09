import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Experiences from "./pages/Experiences"
import Home from "./pages/Home"
import Destinations from "./pages/Destinations"
import About from "./pages/About"
import Guides from "./pages/Journal"
import Journal from "./pages/About"
import Contact from "./pages/Contact"
import Villas from "./pages/Villas"
import Navbar from "./components/Navbar"
import { FilterProvider } from "./context/FilterContext"

const routesData = [
  { id: 0, path: '/', element: <Home /> },
  { id: 1, path: '/destinations', element: <Destinations /> },
  { id: 2, path: '/villas', element: <Villas /> },
  { id: 3, path: '/experiences', element: <Experiences /> },
  { id: 4, path: '/guides', element: <Guides /> },
  { id: 5, path: '/about', element: <About /> },
  { id: 6, path: '/journal', element: <Journal /> },
  { id: 7, path: '/contact', element: <Contact /> },
];

function generateRoutes() {
  return routesData.map((route) => (
    <Route key={route.id} path={route.path} element={route.element} />
  ))
}

function App() {

  return (
    <FilterProvider>
      <Container className="mb-5">
        <Navbar />
        <Routes>
          {generateRoutes()}
        </Routes>
      </Container>
    </FilterProvider>
  )
}

export default App
