import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// Lazy Import
const App = lazy(() => import("./App.jsx"));
// Suspense Loading
import { SuspenseCustom } from './utils/utils.jsx';
// Redux Provider
import { Provider } from 'react-redux';
import { store } from "./redux/store.js"

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <SuspenseCustom>
      <Provider store={store}>
        <App />
      </Provider>
    </SuspenseCustom>
  </BrowserRouter>
  // </StrictMode>,
)
