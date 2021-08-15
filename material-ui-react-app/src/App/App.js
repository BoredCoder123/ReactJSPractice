
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from '../Components/Header';
import SideMenu from '../Components/SideMenu';
import './App.css';

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles()
  return (
    <>
      <SideMenu></SideMenu>
      <div className={classes.appMain}><Header></Header> </div>
      <CssBaseline />
    </>
  );
}

export default App;
