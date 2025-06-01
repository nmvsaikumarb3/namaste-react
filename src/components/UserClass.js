import React from "react";
class UserClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInfo:{
        name: 'Dummy',
        location: 'Default',
      }
    }
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/nmvsaikumarb3");
    const json = await data.json();
    this.setState({
      userInfo:json
    })
    console.log(json);

  }
  render() {
    const { login, location,avatar_url,id } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="Avatar" />
        <h2>Id: {id}</h2>
        <h1>Name: {login}</h1>
        <h2>location:{location}</h2>
      </div>
    );
  }
}

export default UserClass;
