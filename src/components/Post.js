import React,{useState,useEffect} from 'react'
import {DataTable} from "primereact/datatable"
import {Column} from "primereact/column"
import { InputText } from 'primereact/inputtext';
import {FilterMatchMode} from 'primereact/api'
import axios from "axios"

function Post() {

 const [post,setpost]=useState([])

 const getData=async()=>{
    await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res)=>setpost(res.data))
 }

 useEffect(()=>{
    getData()
 },[])

 const [filters, setFilters] = useState({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
   'id':{ value: null, matchMode: FilterMatchMode.STARTS_WITH},
    'userId': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'title': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'body': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
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

    <div>
    
       {/* Global filter */}
       {/* <div className="flex justify-content-between align-items-center">
            <span className="p-input-icon-left m-2">
                <i className="pi pi-search" />
                <InputText onInput={((e)=>
                    setFilter({
                        ...filter,
                        global:{value:e.target.value,matchMode:FilterMatchMode.CONTAINS}
                    }))} placeholder="key search"></InputText>
            </span>
        </div> */}


        {/* <DataTable value={post} sortMode="multiple" filters={filter}
        responsiveLayout="scroll"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[1,6,10]}
        dataKey="id"
        
        paginator
        emptyMessage="No data found"
        className='datatable-responsive'
        // currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        rows={4}
        >
            <Column sortable field='id' header="id"></Column>
            <Column field='userId' sortable header="userId"></Column>
            <Column field='title' sortable header="title"></Column>
            <Column field='body' sortable header="body"></Column>

        </DataTable> */}

            <DataTable value={post} paginator className="p-datatable" rows={4}

            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[1,6,10]}

            dataKey="id" filters={filters} filterDisplay="row" responsiveLayout="scroll"

            globalFilterFields={['id','userId', 'title', 'body']} header={header1} emptyMessage="No Users found.">

            <Column field="id" header="id" sortable filter filterPlaceholder="Search by id" style={{ minWidth: '12rem' }} />

            <Column field="userId" header="userId" sortable filter filterPlaceholder="Search by userId" style={{ minWidth: '12rem' }} />

            <Column field="title" header="title" sortable filter filterPlaceholder="Search by title" style={{ minWidth: '12rem' }} />

            <Column field="body" header="body" sortable filter filterPlaceholder="Search by body" style={{ minWidth: '12rem' }} />

            </DataTable>
        
    </div>
  )
}

export default Post