import List from '@mui/material/List';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

export function PanelList() {    
    return ( 
      <div className='panel-list'>       
      <List style={{backgroundColor: "rgb(93, 130, 209)"}}>

        <ListItem className='panel-list-icons'>
        <SentimentVerySatisfiedIcon />
          <span style={{fontWeight: '700', letterSpacing: '.05rem', marginBottom: '20px'}}>
             SB ADMIN
          </span>
        </ListItem>
     
        <Divider variant="fullWidth" />

      <ListItem className='panel-list-icons'>
        <DashboardIcon />
          {/* <span><Link to="/dashboard">Dashboard</Link></span> */}
          <Link to="/dashboard">
            <span>Dashboard</span>
          </Link>
      </ListItem>
  
        <Divider variant="fullWidth" />
  
        <Typography style=
        {{marginLeft: '20px', marginTop: '20px', color: 'white', fontSize: '.65rem', fontWeight: '800'}}
          variant="caption" display="block" gutterBottom>
          INTERFACE
        </Typography>

        <ListItem className='panel-list-icons'>
        <DashboardIcon />
          <Link to="/all-students">
            <span>All Students</span>
          </Link>
      </ListItem>

      <ListItem className='panel-list-icons'>
        <DashboardIcon />
          <Link to="/add-students">
            <span>Add Students</span>
          </Link>
      </ListItem>

      <Divider variant="fullWidth" />
        </List>
      </div>
    );
  }