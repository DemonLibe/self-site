import { Toast } from '@heroui/react'
import { HomePage } from './pages/home'

export default function App() {
  return (
    <>
      <HomePage />
      <Toast.Provider placement="bottom" />
    </>
  )
}
