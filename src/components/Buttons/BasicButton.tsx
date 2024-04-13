export default function BasicButton({ textProp, widthProp, heightProp }: { textProp: string, widthProp: string, heightProp: string }) {
  return (
    <button className='basicButtonStyle' style={{ width: widthProp, height: heightProp }}>{textProp}</button>
  )
}