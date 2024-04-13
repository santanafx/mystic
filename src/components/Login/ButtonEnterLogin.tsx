import { useNavigate } from 'react-router-dom'
import BasicButton from '../Buttons/BasicButton'

export default function ButtonEnterLogin() {

  const navigate = useNavigate()

  const handleEnter = () => {
    navigate("/matchMenu")
  }

  return (
    <BasicButton textProp={"Enter"} widthProp={"100px"} heightProp={"50px"} handleEnterProp={handleEnter} />
  )
}
