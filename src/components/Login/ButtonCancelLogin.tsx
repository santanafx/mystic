import { useNavigate } from 'react-router-dom'
import BasicButton from '../Buttons/BasicButton'

export default function ButtonCancelLogin() {

  const navigate = useNavigate()

  const handleCancel = () => {
    navigate("/")
  }

  return (
    <BasicButton textProp={"Cancel"} widthProp={"100px"} heightProp={"50px"} handleCancelProp={handleCancel} />
  )
}
