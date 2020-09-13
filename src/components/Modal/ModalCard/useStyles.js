import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: 545,
      minWidth: 350,
      maxHeight: '100vh',
      maxWidth: '90vw',
      margin: 'auto',
      border: '3px solid lightblue',
      background: 'linear-gradient(45deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
      boxShadow: '2px 2px 5px 5px rgba(0, 0, 0, 0.2);',
      overflowY: 'auto',
    },
    
    container: {
      display: 'flex',
      justifyContent: 'center',
      padding: '15px'
    },
   
   spanStyle: {
      textShadow: '2px 2px 3px grey',
      fontSize: '0.9rem',
      fontFamily: "Montserrat, sans-serif"
  }
  
});

export default useStyles;

