
import { createTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import Header from '../Components/Header';
import PageHeader from '../Components/PageHeader';
import SideMenu from '../Components/SideMenu';
import './App.css';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

const theme = createTheme({
  palette: {
    primary: {
      light: '#3c44b126',
      main: '#333996'
    },
    secondary:{
      main: '#f83245',
      light: '#f8324526'
    },
    background: {
      default: '#f4f5fd'
    }
  },
  shape: {
    borderRadius: '12px'
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton: {
      disableRipple: true
    }
  }
})

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <SideMenu></SideMenu>
      <div className={classes.appMain}>
        <Header></Header> 
        <PageHeader
        title='Page header'
        subtitle='Page description'
        icon={<PeopleOutlineIcon fontSize='large'/>} />
        </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
