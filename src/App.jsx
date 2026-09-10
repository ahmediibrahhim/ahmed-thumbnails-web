import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<div className="p-10 text-4xl font-display">Base is ready ✓</div>} />
    </Routes>
  )
}