// This foillows the work that I did the other day
function = MyTest() {
  return (
    <div>
      <img src=".react-logo.jpg" width="40px" alt="logo" className="ReactLogo" />
      <h1>Facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>           
            </ul>
    </div>   
    
    ReactDOM.render(<MyTest />, 
      document.getElemenetById("root"))
  
  
