import React, { Component } from 'react'
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';
import './AdminList.css'

class ScorerList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            message: null
        }
        this.addPlayerClicked = this.addPlayerClicked.bind(this)
    }
    
      addPlayerClicked() {
        this.props.history.push(`/admin/dashboard/PlayerAddForm`)
    }

    
    render() {
        const columns = [{  
            Header: 'First name',
            accessor: 'admin_firstname',
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
                  }}
                />
              )    
            }
        ]  
        return (
            <div>
                <br/>
                <h1 style={{ fontWeight: 80, textAlign: 'center' }}>Existing Scorers</h1>

                <div className = "playerdetails">
                {/* {this.state.message && <div class="alert success">{this.state.message}</div>} */}
                     <div>
                        <button className="btn newBtn" onClick={this.addPlayerClicked}>New</button>
                     </div>
                    
                    <ReactTable
                    className="MyReactTableClass"
                     columns={columns}
                     data={this.state.players}
                     filterable
                     defaultPageSize={10}
                     ></ReactTable>
                     </div>
        </div>
        )
    }
}

export default ScorerList;