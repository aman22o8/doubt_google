// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchinput: ''}

  onChangeofInput = event => {
    this.setState({searchinput: event.target.value})
  }

  showsuggestion = (id, suggestion) => {
    this.setState({searchinput: suggestion})
  }

  render() {
    const {searchinput} = this.state
    console.log(searchinput)
    const {suggestionsList} = this.props
    console.log(suggestionsList)
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchinput),
    )
    console.log(searchResult)
    // console.log(suggestionsList)

    return (
      <div className="main_container">
        <div className="google_image_">
          <img
            className="google_image"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
          />
        </div>
        <div className="card_container">
          <div className="inbox">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search_icon"
            />
            <input
              type="search"
              onChange={this.onChangeofInput}
              value={searchinput}
              placeholder="Search Google"
              className="search_bar"
            />
          </div>
          <ul>
            {searchResult.map(each => (
              <SuggestionItem
                showsuggestion={this.showsuggestion}
                searchList={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
