import { Component } from "react";
import Wrapper from "../../Ui/Wrapper/Wrapper";

class Input extends Component{
    render(){
        return(
            <Wrapper>
            <input 
            placeholder={this.props.placeholder}
            ref={this.props.myref}
            className={this.props.className}
            type={this.props.type}
            onChange={this.props.onChange}
            />
            <br/>
            </Wrapper>
        )
    }
}
export default Input