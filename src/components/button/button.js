function labelAlert (label){
  return alert (`A label desse botão é ` + label)
}


export const Button = ({children, label}) => {
  return (
      <div onClick={() => labelAlert(label)}>
          {children}
      </div>
  )
}