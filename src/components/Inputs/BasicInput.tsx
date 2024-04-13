export default function BasicInput({ typeInputProp, inputNameProp, widthProp, heightProp }: { typeInputProp: string, inputNameProp: string, widthProp: string, heightProp: string }) {
  return (
    <input className='basicInputStyle' type={typeInputProp} placeholder={inputNameProp} style={{ width: widthProp, height: heightProp }} />
  )
}
