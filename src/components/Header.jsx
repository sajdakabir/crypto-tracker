// import { AppBar, Container, makeStyles, MenuItem, Select, Toolbar, Typography, createTheme, ThemeProvider } from '@material-ui/core'
// import React from 'react'
// import { useHistory } from 'react-router-dom';
// import { CryptoState } from '../CryptoContext';
// const useStyles = makeStyles(() => ({
//     title: {
//         flex: 1,
//         color: 'gold',
//         fontFamily: 'Montserrat',
//         fontWeight: 'bold',
//         cursor: 'pointer',
//     }
// }));
// const darkTheme = createTheme({
//     palette: {
//         primary:{
//         main:'#fff',
//         },
        
//         type: 'dark',
//     },
   
// });

// function Header() {
//     const classes = useStyles();
//     // const navigate = useNavigate();
//     const history = useHistory();
//     const {currency,setCurrency}=CryptoState();
//     // console.log(currency)
 

//     return (

//         <ThemeProvider theme={darkTheme}>
//             <AppBar color="transparent" position='static'>
//                 <Container>
//                     <Toolbar>
//                         <Typography onClick={() => history.push(`/`)} className={classes.title}
//                         variant='h5'
//                         >
//                             Crypto Hunter
//                         </Typography>
//                         <Select variant='outlined' style={{
//                             width: 100,
//                             height: 40,
//                             marginRight: 15,
//                         }}
//                         value={currency}
//                         onChange={(e)=>setCurrency(e.target.value)}
//                         >
//                             <MenuItem value={'USD'}>USD</MenuItem>
//                             <MenuItem value={'INR'}>INR</MenuItem>
//                         </Select>
//                     </Toolbar>
//                 </Container>
//             </AppBar>
//         </ThemeProvider>

//     )
// }

// export default Header


import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import {
    createTheme,
    makeStyles,
    ThemeProvider,
  } from "@material-ui/core/styles";
  import { useHistory } from "react-router-dom";
  import { CryptoState } from "../CryptoContext";
  
  const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  
  function Header() {
    const classes = useStyles();
    const { currency, setCurrency } = CryptoState();
    
    const history = useHistory();
  
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => history.push(`/`)}
                variant="h6"
                className={classes.title}
              >
                Crypto Hunter
              </Typography>
              {/* <Button color="inherit">Login</Button> */}
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{ width: 100, height: 40, marginLeft: 15 }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
  
  export default Header;