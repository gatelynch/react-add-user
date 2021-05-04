import React,{useState} from 'react';
import AddUsers from './components/AddUsers';
import UserList from './components/UserList';



function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevState) => {
      return [...prevState, { ID: userList.length + 1, userName: uName, userAge: uAge }];
    });
  }
  return (
    <div>
      <AddUsers onAddUser={addUserHandler} userList={userList}/>
      <div style={{marginTop: '30px'}}></div>
      <UserList UserListHandler={setUserList} userList={userList} />
    </div>
  );
}

export default App;
