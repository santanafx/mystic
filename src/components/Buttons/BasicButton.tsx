export default function BasicButton({ textProp, widthProp, heightProp, handleCancelProp, handleEnterProp }: { textProp: string, widthProp: string, heightProp: string, handleCancelProp?: () => void, handleEnterProp?: () => void }) {

  function handleClick() {
    if (handleCancelProp) {
      handleCancelProp()
    }
    if (handleEnterProp) {
      handleEnterProp()
    }
  }

  return (
    <button className='basicButtonStyle' style={{ width: widthProp, height: heightProp }} onClick={handleClick}> {textProp}</button >
  )
}