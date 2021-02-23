import React                       from "react";
import { useHistory }              from "react-router-dom";
import PersonOutlineOutlinedIcon   from "@material-ui/icons/PersonOutlineOutlined";
import VpnKeyOutlinedIcon          from "@material-ui/icons/VpnKeyOutlined";
import Button                      from "@material-ui/core/Button";
import Link                        from "@material-ui/core/Link";
import logo                        from "../../images/logo.6c8e5727.svg";
import PasswordInputFeild          from "../../components/PasswordInputFeild";
import NameInputFeild              from "../../components/NameInputFeild";
import { makeStyles }              from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main_wrapper: {
    color: "#fff",
    background: "rgb(12,52,81)",
    background: "linear-gradient(90deg, rgba(12,52,81,1) 35%, rgba(24,100,128,1) 100%)",
    minHeight: "100vh",
    position: "relative",
  },
  button: {
    backgroundColor:theme.palette.primary ||'#dadada'
  },
  logo: {
    position: "relative",
    margin: "0px auto 120px",
    top: "60px",
    textAlign: "center",
  },
  companyLogo: {
    width: "170px",
    display: "block",
    margin: "0 auto 20px",
  },
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form_box: {
    padding: "30px",
    boxShadow: "0px 0px 9px 4px rgb(255 255 255 / 20%)",
    borderRadius: "6px",
    width: "27rem",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  form_group: {
    position: "relative",
    marginBottom: "10px",
    "& .MuiFormControl-root": {
      width: "100%",
      marginBottom: "10px",
    },
  },

  svg_icon: {
    position: "absolute",
    padding: "0 0",
    top: "15px",
    left: "10px",
  },

  forgottenPassword: {
    color: "#1a919a",
    fontWeight: "600",
    textAlign: "center",
    display: "block",
    marginBottom: "12px",
    fontSize: "14px",
    position: "relative",
    float: "right",
    textDecoration: "none",
    cursor:"pointer",
  },

  button: {
    marginTop: "10px",
    display: "block",
    margin: theme.spacing(3, 0, 0),
    width: "100%",
    backgroundColor: "#1a919a",
    color: "#ffffff",
  },
}));

const Login = () => {
  const classes = useStyles();

  const history = useHistory();
  const navigateTo = () => history.push("/dashboard");
  const navigatesTo = () => history.push("/resetpassword");

  return (
    <>
      <div className={classes.main_wrapper}>
        <div className={classes.paper}>
          <div className={classes.logo}>
            <img src={logo} alt="Logo" className={classes.companyLogo} />
          </div>
          <div className={classes.form_box}>
            <form autocomplete="off">
              <div className={classes.form_group}>
                <PersonOutlineOutlinedIcon className={classes.svg_icon} />
                <NameInputFeild />
              </div>
              <div className={classes.form_group}>
                <VpnKeyOutlinedIcon className={classes.svg_icon} />
                <PasswordInputFeild />
              </div>
              <Link to="/resetpassword" onClick={navigatesTo} className={classes.forgottenPassword}>
                Forgotten Password
              </Link>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
                value="Log In"
                onClick={navigateTo}
              >
                Log In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
