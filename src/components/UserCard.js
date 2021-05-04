import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  UserCard: {
    marginBottom: 20,
    marginTop: 20,
  },
  
});
const UserCard = ({user, handleDelete}) => {
  const classes = useStyles();
  return ( 
    <div className={classes.userCard}>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(user.ID)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={<Typography>姓名 {user.userName}</Typography>}
          subheader={<Typography color="textSecondary">年紀 {user.userAge}</Typography>}
        />
        
      </Card>
    </div>
   );
}
 
export default UserCard;