import React, { Component } from "react";
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';
import './AdminList.css'

class AdminList extends Component {
  constructor(props) {
    super(props)
    this.state = {
        admins: [],
        message: null
    }
    this.addAdminClicked = this.addAdminClicked.bind(this)
}

  addAdminClicked() {
    this.props.history.push(`/admin/dashboard/PlayerAddForm`)
}


  render() {
    const columns = [{  
      Header: 'First name',
      accessor: 'admin_firstname',
      headerClassName: 'hdrCls',
      className: 'cellCls',
      filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
        },Filter: ({filter, onChange}) => (
          <input
          placeholder="Search"
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              width: '100%',
              backgroundColor: '#DCDCDC',
              color: 'black',
            }}
          />
        )  
      },{  
      Header: 'Last name',  
      accessor: 'admin_lastname',
      headerClassName: 'hdrCls',
      className: 'cellCls',
      filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
        } , Filter: ({filter, onChange}) => (
          <input
          placeholder="Search"
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              width: '100%',
              backgroundColor: '#DCDCDC',
              color: 'black',
            }}
          />
        )  
      },{  
      Header: 'Email',  
      accessor: 'admin_email',
      headerClassName: 'hdrCls',
      className: 'cellCls',
      filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
        }, Filter: ({filter, onChange}) => (
          <input
          placeholder="Search"
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              width: '100%',
              backgroundColor: '#DCDCDC',
              color: 'black',
              fontSize: 20
            }}
          />
        )    
      }
  ]  
    return (
      <div>
        <br />
        <h1 style={{ fontWeight: 80, textAlign: 'center' }}>Existing Admins</h1>
        <div className = "playerdetails">
                {/* {this.state.message && <div class="alert success">{this.state.message}</div>} */}
                     <div>
                        <button className="btn newBtn" onClick={this.addAdminClicked}>New</button>
                     </div>
                    
                    <ReactTable
                    className="MyReactTableClass"
                     columns={columns}
                     data={this.state.admins}
                     filterable
                     defaultPageSize={5}
                     ></ReactTable>
        </div>
      </div>
    );
  }
}

export default AdminList;
