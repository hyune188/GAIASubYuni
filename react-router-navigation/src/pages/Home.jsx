function Home() {
    return (
        <header className="App-header">
        <h1>Welcome to Home</h1>
        <p>This is my first React component</p>
        <p>current time: {new Date().toLocaleTimeString()}</p>
      </header>
    )
}
export default Home;