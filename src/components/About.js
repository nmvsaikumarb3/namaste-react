import UserClass from "./UserClass";
import UserFuntional from "./UserFuntional";

const About = () =>{
    return(
        <div className="about">
            <h1>About</h1>
            <h2>This is Namaste React web series</h2>
            <UserFuntional name={"sai"} id={"205942"} role={"Full Stack Developer"} />
            <UserClass name={"sai"} id={"205942"} role={"Full Stack Developer"}/>
        </div>
    )
}

export default About;