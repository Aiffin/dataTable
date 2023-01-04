import React,{useState,useEffect} from 'react'
import {DataTable} from "primereact/datatable"
import {Column} from "primereact/column"
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';

import axios from "axios"

function User() {

 const [users,setUsers]=useState([])

 const getData=async()=>{
    await axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=>setUsers(res.data))
 }

 useEffect(()=>{
    getData()
 },[])

 const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
	   'id':{ value: null, matchMode: FilterMatchMode.STARTS_WITH},
        'name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'email': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'phone': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'website': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }


 const renderHeader2 = () => {
        return (
            <div className="flex justify-content-start">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

   const header1 = renderHeader2();

  return (

        <div className="grid">
            <div className="col-12">
            <div className="card">
              
              <DataTable value={users} paginator rows={6}

                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[1,6,10]}

                  dataKey="id" filters={filters} filterDisplay="row" responsiveLayout="scroll"

                  globalFilterFields={['id','name', 'email', 'phone', 'website']} header={header1} emptyMessage="No Users found.">
              
                  <Column field="id" header="id" sortable filter filterPlaceholder="Search by id" style={{ minWidth: '12rem' }} />

                  <Column field="name" header="name" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />

                  <Column field="email" header="email" sortable filter filterPlaceholder="Search by email" style={{ minWidth: '12rem' }} />

                  <Column field="phone" header="phone" filter filterPlaceholder="Search by phone" style={{ minWidth: '12rem' }} />

                  <Column field="website" header="website" filter filterPlaceholder="Search by website" style={{ minWidth: '12rem' }} />


              </DataTable>
          </div>
        </div>
    </div>

    
  )
}

export default User