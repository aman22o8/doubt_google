// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchList, showsuggestion} = props
  //   console.log(searchList)
  const {suggestion, id} = searchList
  const clickingpara = () => {
    showsuggestion(id, suggestion)
  }
  //   console.log(suggestion)
  return (
    <li className="list_container">
      <p className="description">{suggestion}</p>
      <img
        onClick={clickingpara}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="image_1"
      />
    </li>
  )
}

export default SuggestionItem
