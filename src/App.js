import React , {Component}  from 'react'
import  AppNavBar from './components/AppNavBar'
import {loadUser} from './actions/authActions'

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  render() {
    return (
      <div>
        <AppNavBar />
        <div>content</div>
      </div>
    )
  }
}
export default App



