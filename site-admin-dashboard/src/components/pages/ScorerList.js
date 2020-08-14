import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "./AdminList.css";
import ScorerCredDataService from "../../services/ScorerCredDataService";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

const formStyle = { width: "100%" };

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ScorerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scorers: [],
      open_form: false,
      scorer_firstname: "",
      scorer_lastname: "",
      scorer_email: "",
    };
    this.retrieveAllScorer = this.retrieveAllScorer.bind(this);
  }

  componentDidMount() {
    this.retrieveAllScorer();
  }

  retrieveAllScorer() {
    ScorerCredDataService.retrieveAllScorer().then((response) => {
      console.log(response);
      this.setState({ scorers: response.data });
    });
  }

  openAddForm = (e) => {
    this.setState({
      open_form: true,
    });
  };

  handleClose = () => {
    this.setState({ open_form: false });
  };
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => {
    var scorer = {
      scorerFirstname: this.state.scorer_firstname,
      scorerLastname: this.state.scorer_lastname,
      scorerEmail: this.state.scorer_email,
    };
    console.log(scorer);
    ScorerCredDataService.createScorer(scorer).then((response) => {
      this.setState({ open_form: false });
      this.retrieveAllScorer();
    });

    var userbyrole = {
      userEmailId : this.state.scorer_email,
      userRole : "CABI_APPL_SCORER"
    };
    ScorerCredDataService.userRoleByEmail(userbyrole).then((response) => {
      console.log(userbyrole)
    })

    var userCred = {
      userFirstname : this.state.scorer_firstname,
      userLastname : this.state.scorer_lastname,
      userEmail : this.state.scorer_email 
    };
    ScorerCredDataService.userCred(userCred).then((response) => {
      console.log(userCred)
    })
  };

  render() {
    const columns = [
      {
        Header: "First name",
        accessor: "scorerFirstname",
        headerClassName: "hdrCls",
        className: "cellCls",
        filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
        },
        Filter: ({ filter, onChange }) => (
          <input
            placeholder="Search"
            onChange={(event) => onChange(event.target.value)}
            value={filter ? filter.value : ""}
            style={{
              width: "100%",
              backgroundColor: "#DCDCDC",
              color: "black",
            }}
          />
        ),
      },
      {
        Header: "Last name",
        accessor: "scorerLastname",
        headerClassName: "hdrCls",
        className: "cellCls",
        filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
        },
        Filter: ({ filter, onChange }) => (
          <input
            placeholder="Search"
            onChange={(event) => onChange(event.target.value)}
            value={filter ? filter.value : ""}
            style={{
              width: "100%",
              backgroundColor: "#DCDCDC",
              color: "black",
            }}
          />
        ),
      },
      {
        Header: "Email",
        accessor: "scorerEmail",
        headerClassName: "hdrCls",
        className: "cellCls",
        filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
        },
        Filter: ({ filter, onChange }) => (
          <input
            placeholder="Search"
            onChange={(event) => onChange(event.target.value)}
            value={filter ? filter.value : ""}
            style={{
              width: "100%",
              backgroundColor: "#DCDCDC",
              color: "black",
            }}
          />
        ),
      },
    ];
    return (
      <div>
        <br />
        <h1 style={{ fontWeight: 80, textAlign: "center" }}>
          Existing Scorers
        </h1>

        <div className="Scorerdetails">
          {/* {this.state.message && <div class="alert success">{this.state.message}</div>} */}
          <div>
            <Button
              variant="contained"
              style={{
                border: "none",
                color: "white",
                padding: "08px 20px",
                fontSize: "medium",
                cursor: "pointer",
                marginTop: "20px",
                backgroundColor: "#0D5C75",
                marginBottom: "30px",
                marginLeft: 30,
              }}
              onClick={this.openAddForm}
            >
              New
            </Button>
          </div>

          <ReactTable
            className="MyReactTableClass"
            columns={columns}
            data={this.state.scorers}
            filterable
            defaultPageSize={5}
          ></ReactTable>

          <Dialog
            open={this.state.open_form}
            TransitionComponent={Transition}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <Paper
                style={{
                  width: "500px",
                  height: "570px",
                  paddingLeft: "2%",
                  paddingRight: "0%",
                  paddingTop: "1%",
                }}
              >
                <center>
                  <h3>Add New Scorer</h3>
                </center>
                <TextField
                  style={{ width: "45%" }}
                  id="outlined-simple-start-adornment"
                  variant="outlined"
                  label="First Name"
                  onChange={this.handleChange("scorer_firstname")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        First Name
                      </InputAdornment>
                    ),
                  }}
                />
                <br />
                <br />
                <br />
                <TextField
                  style={{ width: "45%" }}
                  id="outlined-simple-start-adornment"
                  variant="outlined"
                  label="Last Name"
                  onChange={this.handleChange("scorer_lastname")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        Last Name
                      </InputAdornment>
                    ),
                  }}
                />
                <br />
                <br />
                <br />
                <TextField
                  style={{ width: "45%" }}
                  id="outlined-simple-start-adornment"
                  variant="outlined"
                  onChange={this.handleChange("scorer_email")}
                  label="Scorer Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        Scorer Email
                      </InputAdornment>
                    ),
                  }}
                />
                <br></br>
                <br></br>
                <center>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "150px" }}
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>
                </center>
              </Paper>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  this.setState({ open_form: false });
                }}
                variant="outlined"
                color="secondary"
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default ScorerList;
