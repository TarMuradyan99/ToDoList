import { Component } from "react";

class Listitem extends Component{
    render(){
        return(
            <li key={this.props.key} className={this.props.className}>{this.props.children}</li>
        )
    }
}
export default Listitem