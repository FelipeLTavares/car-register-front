import RegisterForm from "./components/RegisterForm/RegisterForm"
import { GlobalStyles } from "./styles/global.styles"


export default function App() {
  GlobalStyles()

  return (
    <div className="App">
      <RegisterForm></RegisterForm>
    </div>
  )
}
