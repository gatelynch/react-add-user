import React ,{useEffect} from 'react';
import {Container, Grid } from '@material-ui/core';
import UserCard from "./UserCard";


const UserList = ({ userList, UserListHandler}) => {

  useEffect(() => {
    fetch('https://sheet.best/api/sheets/421cbf0b-e884-425d-ad23-e7d658c2f851')
      .then(res => res.json())
      .then(data => UserListHandler(data))
  }, [])

  const handleDelete = async (ID) => {
    await fetch(`https://sheet.best/api/sheets/421cbf0b-e884-425d-ad23-e7d658c2f851/ID/${ID}`, {
      method: 'DELETE'
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    const newUserLists = userList.filter(user => user.ID !== ID)
    UserListHandler(newUserLists);
  }




  return ( 
    <Container>
      <Grid container spacing={3}>
        {userList.map(user => (
          <Grid item xs={12} md={6} lg={4} key={user.ID}>
            <UserCard user={user} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
 
export default UserList;