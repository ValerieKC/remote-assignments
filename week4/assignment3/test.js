// 從React物件中取出`useState方法`
const { useState } = React

const Header = () => {
  const [showActive, setShowState] = useState(false)
  // const [closeActive, setCloseActive] = useState(false)
  return(
    <header className="main-header">
      <h1 className="name"><a>Best Restaurant Guide</a></h1>
      <ul className="main-nav">
        <div className={`list ${showActive ? "show" : ""}`}>
          <div className="x-mark"
          onClick={() => setShowState(!showActive)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <li><a>Italian</a></li>
          <li><a>Japanese</a></li>
          <li><a>American</a></li>
          <li><a>French</a></li>
        </div>
        <i className="fa-solid fa-bars menu" 
        onClick={() => setShowState(!showActive)}></i>
      </ul>
    </header>
  )
}

const Banner =() => {
  const [greeting, setGreeting] = useState('The Best Food')
  return(
    <div className="banner">
      <i className="fa-solid fa-champagne-glasses fa-8x"></i>
      <h1 className="headline" onClick={() => setGreeting('Have a good time!')}>{greeting}</h1>
      <span className="tagline">The most reliable restaurant guide.</span>
    </div>
  )
}

const Container = () => {
  return(
    <div className="container">
      <h2 className="Title">Section Title</h2>
      <div className="row">
        <div className="primary col">
          <h2>Title1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="secondary col">
          <h2>Title2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="third col">
          <h2>Title3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="fourth col">
          <h2>Title4</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      
    </div>
  )
}

const Container2 = ({secStyle}) => {
  return (
    <div className="container">
      <div className="row part2" style={{ display: secStyle }}>
        <div className="primary col">
          <h2>Title1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="secondary col">
          <h2>Title2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="third col">
          <h2>Title3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="fourth col">
          <h2>Title4</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      
    </div>
  )
}


const Button = ({onClick}) => {
   
  return(
    <button className="open-more"
      onClick={onClick}>know more</button>
  )
}

const Footer =() => {
  return(
  <footer></footer>
  )
}

const App = () =>{
  const [secStyle, setSecStyle] = useState("none")
  const openClose = () =>{
    setSecStyle((value) =>(value === "none" ? "" : "none"))   
     }

  return(
    <div className="Page">
      <Header />
      <Banner />
      <Container />
      <Button onClick={openClose} />
      <Container2  secStyle={secStyle} />
      <Footer />
    </div>
  )
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)

