

export const ContentWrapper = ({title, children}) => {
  return (
    <div>
        <h1 className="text-4xl">{title}</h1>
        <div>
            {children}
        </div>
    </div>
  )
}
