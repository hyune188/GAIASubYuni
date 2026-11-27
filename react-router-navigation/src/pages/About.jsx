function About() {
    return (
        <header className="App-header">
        <h1>Welcome to About</h1>
        <p>This is my first React component</p>
        <p>current time: {new Date().toLocaleTimeString()}</p>
      </header>
    )
}
export default About;