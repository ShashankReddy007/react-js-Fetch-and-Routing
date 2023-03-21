// import './index.css'

// const Home = () => (
//   <div className="home-container">Render UserInfo and BlogList</div>
// )

// export default Home

import './index.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
