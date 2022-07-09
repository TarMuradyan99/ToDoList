import { Component } from "react";
import Wrapper from "../../Ui/Wrapper/Wrapper";

class Text extends Component{
    render(){
        return(
            <Wrapper>
            <span className={this.props.className} >{this.props.children}</span>
            <br/>
            </Wrapper>
        )
    }
}
export default Text