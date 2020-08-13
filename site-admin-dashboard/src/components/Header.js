import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import appbar from '../assets/appbar.png'

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class Header extends React.Component{
 render(){  
    return(
              <div>
                  <Button variant="contained" color="primary" style={{marginTop:30, backgroundColor: '#0D5C75', position:"absolute",marginLeft:1200}}> Logout</Button>
                  <img className="header_img" src={appbar} alt="header"  style={{height: 100, width: '100%'}}></img>
                 
              </div>
      );
  }
}

export default withStyles(useStyles)(Header);
