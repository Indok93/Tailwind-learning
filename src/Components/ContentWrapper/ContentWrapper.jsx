

export const ContentWrapper = ({title, children}) => {
  return (
    <div>
        <h1 className="">{title}</h1>
        <div>
            {children}
        </div>
    </div>
  )
}
