import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,TextField, Button,Container,Typography} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'



const useStyles = makeStyles({
  textField: {
    marginBottom:20,
    marginTop:20, 
  },
  button:{
    marginBottom:20,
    marginLeft:"auto",
    marginRight:"auto",
  }
});




const AddUser = () => {
  const classes= useStyles();
  const [enteredUser,setEnteredUser] = useState('');  
  const [enteredAge,setEnteredAge] = useState('');
  const [userList, setUserList]= useState([]);

  const addUserHandler=(uName, uAge)=>{
    setUserList((prevState)=>{
      return [ ...prevState, {userName: uName, userAge: uAge} ];
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(enteredUser.trim().length ===0 || enteredAge.trim().length === 0){
      return;
    }
    if (
      +enteredAge<1
    ) {
      return;
    }
    addUserHandler(enteredUser, enteredAge);
    // if (enteredUser && enteredAge) {
    //   fetch("https://sheet.best/api/sheets/a9cf3e8c-eb23-489d-9ce5-4681694b18ed", {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {"Content-type": "application/json"},
    //     body: JSON.stringify(userList)
    //   })
    // } 
    
  console.log(enteredUser, enteredAge , userList);
  setEnteredAge('');
  setEnteredUser('');
  }

  const ageChangeHandler = (event)=>{
    setEnteredAge(event.target.value);
  }

  const userNameChangeHandler =(event)=>{
    setEnteredUser(event.target.value);
  }

  return ( 
  <Container maxWidth="lg">
    <Typography
    variant="h6"
    color="textPrimary"
    component="h2"
    gutterBottom
    >
    增加新使用者
    </Typography>
    <Card>
     <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
     >
     <TextField 
        className={classes.textField}
        label="使用者名稱"
        variant="outlined"
        color="primary"
        onChange={userNameChangeHandler}
        value={enteredUser}
        fullWidth
        required
      />
      <TextField 
        className={classes.textField}
        label="年齡"
        variant="outlined"
        color="primary"
        value={enteredAge}
        onChange={ageChangeHandler}
        type="number"
        fullWidth
        required
      />
      <Button 
      className={classes.button}
      color="secondary"
      variant="contained"
      size="medium"
      endIcon={<KeyboardArrowRightIcon />}
      type="submit"
    >
    送出
    </Button>
     </form>
    </Card>
    

  </Container>
  );
}
 
export default AddUser;