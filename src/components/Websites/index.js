import './index.css'

const Websites = props => {
  const {websites, deleteWebsite} = props
  const {id, timeAccessed, domainUrl, title, logoUrl} = websites

  const onDelete = () => {
    deleteWebsite(id)
  }

  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <div className="web-site">
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="name">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <div className="logo-container">
        <button
          type="button"
          onClick={onDelete}
          id="delete"
          className="button-element"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default Websites
