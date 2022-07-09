import React, { Component, createRef } from "react";
import Input from "./Components/Input/Input";
import Wrapper from "./Ui/Wrapper/Wrapper";
import classes from "./Ui/Global.module.css"
import Card from "./Ui/Card/Card";
import Text from "./Components/Text/text";
import Button from "./Components/Button/Button";
import List from "./Components/List/List";
import Listitem from "./Components/Listitem/Listitem";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      userList: [
        {name:`Taron`,surname:`Muradyan`,age:23,hobby:`js`,id:1},
        {name:`Edo`,surname:`Muradyan`,age:24,hobby:`gaming`,id:2},
        {name:`Avetiq`,surname:`Isahakyan`,age:82,hobby:`writer`,id:3}
      ],
     newId:4,
    search:``
    }
    this.nameRef = React.createRef('')
    this.surnameRef = React.createRef('')
    this.ageRef = React.createRef('')
    this.hobbyRef = React.createRef('')
  }
  changeItems = (item) =>{
      return item.name.toLowerCase().includes(this.state.search.toLocaleLowerCase())
      }

  deleteItem = (id) => {
    const ListWithoutDeletedItem = this.state.userList.filter(el => el.id !== id)
    this.setState({
      userList: ListWithoutDeletedItem
    })
  }

  searchFunc = (event) => {
    this.setState({
      search: event.target.value
    })
  }
  createUser = ()=>{
    if(
      this.nameRef.current.value.length > 3 &&
      this.surnameRef.current.value.length>5 &&
      this.ageRef.current.value &&
      this.hobbyRef.current.value
    ){
      let user = {
        name: this.nameRef.current.value,
        surname: this.surnameRef.current.value,
        age:  this.ageRef.current.value,
        hobby: this.hobbyRef.current.value,
        id: this.state.newId
      }
      let newUsersList = this.state.userList;
      newUsersList.push(user)
      this.setState({
        userList: newUsersList,
        newId: this.state.newId + 1
      })
    }
  }

  render(){
    return(
      <Wrapper>
        <Card className={classes.myfolder}>
          <Text className={classes.mybook}>T0 Do List</Text>
        <Card className={classes.mysearchdiv}>
          <Text className={classes.mytext}>Search</Text>
        <Input myref={this.nameRef} type="text" onChange={this.searchFunc} placeholder="Search" className={classes.myinput} />
        </Card>
        <Card className={classes.mynamediv}>
          <Text>User's Name</Text>
        <Input type="text" myref={this.nameRef} placeholder="User Name" className={classes.myinput}/>
        </Card>
        <Card className={classes.mysurnamediv}>
          <Text>User's Surname</Text>
        <Input type="text" myref={this.surnameRef} placeholder="User Surname" className={classes.myinput}/>
        </Card>
        <Card className={classes.myagediv}>
          <Text>User's Age</Text>
        <Input type="number" myref={this.ageRef} placeholder="User age" className={classes.myinput}/>
        </Card>
        <Card className={classes.myhobbydiv}>
          <Text>User's Hobby</Text>
        <Input type="text" myref={this.hobbyRef} placeholder="User Hobby" className={classes.myinput}/>
        </Card>
        <Button className={classes.clickadd} onClick={this.createUser}>Click to Add</Button>
        <Card className={classes.results}>
          <List className={classes.res}>
            {this.state.userList.filter(item => this.changeItems(item)).map(el => {
              return (
                <Listitem className={classes.myresult} key={el.id}>
                  <Text>{el.name}</Text>
                  <Text>{el.surname}</Text> 
                  <Text>{el.hobby}</Text>
                  <Text>{el.age}</Text>
                  <Button onClick={() => this.deleteItem(el.id)} className={classes.delete}>Delete</Button>
                </Listitem>
              )
            })}
          </List>
        </Card>
        </Card>
      </Wrapper>
    )
  }
}

export default App