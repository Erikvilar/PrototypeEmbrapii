const static_compose = ({notes, links, }) => {
  return (
    <div className='static_compose'>
    <div className='logo_static_compose'>
      <a href="/"><img src="./src/images/icons/logo oficial horizontal.jpg" alt="" /></a>
    </div>
    {notes}
    {links}
</div>
  )
}
export default static_compose