function Logo(props: any) {
  const {renderDefault, title} = props

  return (
    <div className="flex items-center space-x-2">
      PouyaSadri
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo
