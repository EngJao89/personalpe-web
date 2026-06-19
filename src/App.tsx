import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/layout'
import { AboutPage } from '@/pages/about-page'
import { HomePage } from '@/pages/home-page'
import { PlansPage } from '@/pages/plans-page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="sobre" element={<AboutPage />} />
          <Route path="planos" element={<PlansPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
