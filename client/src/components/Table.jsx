import { Box,Typography } from "@mui/material";
import { DataGrid, GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../theme";
import { useState,useEffect } from 'react';
import { useTheme } from "@mui/material";

const Table = () => {

  
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);
    const [data6, setData6] = useState([]);

  
    useEffect(() => {
        const fetchData1 = async () => {
            try {
                const res = await fetch('http://localhost:8001/entryone');
                const jsonData = await res.json();
                setData1(jsonData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData1();
        const fetchData2 = async () => {
            try {
                const res = await fetch('http://localhost:8001/entrytwo');
                const jsonData = await res.json();
                setData2(jsonData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData2();
        const fetchData3 = async () => {
            try {
                const res = await fetch('http://localhost:8001/entrythree');
                const jsonData = await res.json();
                setData3(jsonData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData3();
         const fetchData4 = async () => {
            try {
                const res = await fetch('http://localhost:8001/entryfour');
                const jsonData = await res.json();
                setData4(jsonData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData4();
        const fetchData5 = async () => {
            try {
                const res = await fetch('http://localhost:8001/entryfive');
                const jsonData = await res.json();
                jsonData.forEach((obj, i) => {
                obj.averageIncome = '$' + obj.averageIncome.toFixed(2);
                obj.id = i;
                setData5(jsonData);
            });

            } catch (error) {
                console.log(error);
            }
        };
        fetchData5();
        const fetchData6 = async () => {
            try {
                const res = await fetch('http://localhost:8001/all');
                const jsonData = await res.json();
                setData6(jsonData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData6();
    }, []);
    
    const [pageSize, setPageSize] = useState(10);
     
    const columns1 = [{
              field: "id",
              headerName: "ID",
              flex: 0.5,
              cellClassName: "name-column--cell1"
          },
          {
              field: "first_name",
              headerName: "First Name",
              flex: 1,
              cellClassName: "name-column--cell3"
          },
          {
              field: "last_name",
              headerName: "Last Name",
              flex: 1,
              cellClassName: "name-column--cell3"
          },
          {
              field: "email",
              headerName: "Email",
              flex: 2,
              cellClassName: "name-column--cell"
          },
          {
              field: "gender",
              headerName: "Gender",
              flex: 1,
              cellClassName: "name-column--cell"
          },
          {
              field: "income",
              headerName: "Income",
              flex: 1,
              cellClassName: "name-column--cell3"
          },
          {
              field: "city",
              headerName: "City",
              flex: 1,
              cellClassName: "name-column--cell2"
          },
          {
              field: "car",
              headerName: "Car",
              flex: 1,
              cellClassName: "name-column--cell2"
          },
          {
              field: "quote",
              headerName: "Quote",
              flex: 2,
              cellClassName: "name-column--cell"
          },
          {
              field: "phone_price",
              headerName: "Phone Price",
              flex: 1,
              cellClassName: "name-column--cell3"
          },
      ];
    const columns2 = [
          {
              field: "id",
              headerName: "ID",
              flex: 0.5,
              cellClassName: "name-column--cell1"
          },
          {
              field: "city",
              headerName: "City",
              flex: 1,
              cellClassName: "name-column--cell3"
          },
          {
              field: "averageIncome",
              headerName: "Average Income",
              flex: 1,
              cellClassName: "name-column--cell3"
          },
          {
              field: "count",
              headerName: "Count",
              flex: 2,
              cellClassName: "name-column--cell"
          },
        ];
    
    
  return (
    <>
      <Box m="20px"  >
        <Typography variant="h1" color={colors.redAccent[500]} fontWeight="bold">Table I</Typography>
            <Typography variant="h5" color='orange'>
              <span>Shows the users which have income lower  </span>
              <span>than $5 USD and have a car of brand </span>
              <span>a car of brand of brand</span>
              <span> “BMW” or “Mercedes”.</span>
            </Typography>
        <Box
        m="40px 0 10 0"
        height="90vh"
        overflow= "auto" 
        sx={{
          "& .MuiDataGrid-root": {
              border: "none",
              overflow: "auto",
              minWidth: {xs:'1100px',sm:'1100px',md:'1100px',lg:'1000px'}
            },
        }}
        >
          <DataGrid
            sx={{
            
            "& .MuiDataGrid-cell": {
              borderBottom: `2px solid ${colors.grey[300]}`,
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
              fontSize:15,
            },
            "& .name-column--cell1": {
              fontSize:15,
            },
            "& .name-column--cell2": {
              color: colors.grey[300],
              fontSize:15,
              
            },
            "& .name-column--cell3": {
              color: "orange",
              fontSize:15,
              
            },
            "& .MuiDataGrid-columnHeaders": {
              bgcolor:  colors.blueAccent[400],
              borderBottom: "none",
              borderRadius: "10px 10px 0px 0px",
              height:"30px",
              fontSize:16,
            },
            "& .MuiDataGrid-virtualScroller": {
              bgcolor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              borderRadius: "0px 0px 10px 10px",
              fontSize:16,
              bgcolor: colors.blueAccent[400],
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
              fontSize:14,
            }, 
            "&::-webkit-scrollbar-track":{
              borderRadius:'5px',
              bgcolor: colors.blueAccent[200],
            },
            "&::-webkit-scrollbar-thumb" :{
              borderRadius:'5px',
              bgcolor: colors.blueAccent[100],
            },
          }}
            components={{
              Toolbar: GridToolbar,
              }}
            rows={data1}
            columns={columns1}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20, 30]}
            pagination
            {...data1}
          />
        </Box>
      </Box>
      <Box m="20px"  >
        <Typography variant="h1" color={colors.redAccent[500]} fontWeight="bold">Table II</Typography>
            <Typography variant="h5" color='orange'>
              <span >Shows the Male Users which </span>
              <span >have phone price </span>
              <span >greater than 10,000.</span>
            </Typography>
        <Box
        m="40px 0 10 0"
        height="90vh"
        overflow= "auto" 
        sx={{
          "& .MuiDataGrid-root": {
              border: "none",
              overflow: "auto",
              minWidth: {xs:'1100px',sm:'1100px',md:'1100px',lg:'1000px'}
            },
        }}
        >
          <DataGrid
            sx={{
            
            "& .MuiDataGrid-cell": {
              borderBottom: `2px solid ${colors.grey[300]}`,
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
              fontSize:15,
            },
            "& .name-column--cell1": {
              fontSize:15,
            },
            "& .name-column--cell2": {
              color: colors.grey[300],
              fontSize:15,
              
            },
            "& .name-column--cell3": {
              color: "orange",
              fontSize:15,
              
            },
            "& .MuiDataGrid-columnHeaders": {
              bgcolor:  colors.blueAccent[400],
              borderBottom: "none",
              borderRadius: "10px 10px 0px 0px",
              height:"30px",
              fontSize:16,
            },
            "& .MuiDataGrid-virtualScroller": {
              bgcolor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              borderRadius: "0px 0px 10px 10px",
              fontSize:16,
              bgcolor: colors.blueAccent[400],
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
              fontSize:14,
            }, 
            "&::-webkit-scrollbar-track":{
              borderRadius:'5px',
              bgcolor: colors.blueAccent[200],
            },
            "&::-webkit-scrollbar-thumb" :{
              borderRadius:'5px',
              bgcolor: colors.blueAccent[100],
            },
          }}
            components={{
              Toolbar: GridToolbar,
              }}
            rows={data2}
            columns={columns1}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20, 30]}
            pagination
            {...data2}
          />
        </Box>
      </Box>
      <Box m="20px"  >
        <Typography variant="h1" color={colors.redAccent[500]} fontWeight="bold">Table III</Typography>
            <Typography variant="h5" color='orange'>
               <span>Users whose last name starts with “M” </span>
               <span >and has a quote character length</span>
               <span >greater than 15 and </span>
               <span >email includes his/her last name.</span>
               
            </Typography>
        <Box
        m="40px 0 10 0"
        height="90vh"
        overflow= "auto" 
        sx={{
          "& .MuiDataGrid-root": {
              border: "none",
              overflow: "auto",
              minWidth: {xs:'1100px',sm:'1100px',md:'1100px',lg:'1000px'}
            },
        }}
        >
          <DataGrid
            sx={{
            
            "& .MuiDataGrid-cell": {
              borderBottom: `2px solid ${colors.grey[300]}`,
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
              fontSize:15,
            },
            "& .name-column--cell1": {
              fontSize:15,
            },
            "& .name-column--cell2": {
              color: colors.grey[300],
              fontSize:15,
              
            },
            "& .name-column--cell3": {
              color: "orange",
              fontSize:15,
              
            },
            "& .MuiDataGrid-columnHeaders": {
              bgcolor:  colors.blueAccent[400],
              borderBottom: "none",
              borderRadius: "10px 10px 0px 0px",
              height:"30px",
              fontSize:16,
            },
            "& .MuiDataGrid-virtualScroller": {
              bgcolor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              borderRadius: "0px 0px 10px 10px",
              fontSize:16,
              bgcolor: colors.blueAccent[400],
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
              fontSize:14,
            }, 
            "&::-webkit-scrollbar-track":{
              borderRadius:'5px',
              bgcolor: colors.blueAccent[200],
            },
            "&::-webkit-scrollbar-thumb" :{
              borderRadius:'5px',
              bgcolor: colors.blueAccent[100],
            },
          }}
            components={{
              Toolbar: GridToolbar,
              }}
            rows={data3}
            columns={columns1}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20, 30]}
            pagination
            {...data3}
          />
        </Box>
      </Box>
      <Box m="20px"  >
        <Typography variant="h1" color={colors.redAccent[500]} fontWeight="bold">Table IV</Typography>
            <Typography variant="h5" color='orange'>
              Shows the users which have a car 
              <span style={{color:colors.grey[100]}}></span>
              of brand “BMW”, “Mercedes” or “Audi” 
              <span style={{color:colors.grey[100]}}></span>
              and whose email does not include any digit.
            </Typography>
        <Box
        m="40px 0 10 0"
        height="90vh"
        overflow= "auto" 
        sx={{
          "& .MuiDataGrid-root": {
              border: "none",
              overflow: "auto",
              minWidth: {xs:'1100px',sm:'1100px',md:'1100px',lg:'1000px'}
            },
        }}
        >
          <DataGrid
            sx={{
            
            "& .MuiDataGrid-cell": {
              borderBottom: `2px solid ${colors.grey[300]}`,
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
              fontSize:15,
            },
            "& .name-column--cell1": {
              fontSize:15,
            },
            "& .name-column--cell2": {
              color: colors.grey[300],
              fontSize:15,
              
            },
            "& .name-column--cell3": {
              color: "orange",
              fontSize:15,
              
            },
            "& .MuiDataGrid-columnHeaders": {
              bgcolor:  colors.blueAccent[400],
              borderBottom: "none",
              borderRadius: "10px 10px 0px 0px",
              height:"30px",
              fontSize:16,
            },
            "& .MuiDataGrid-virtualScroller": {
              bgcolor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              borderRadius: "0px 0px 10px 10px",
              fontSize:16,
              bgcolor: colors.blueAccent[400],
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
              fontSize:14,
            }, 
            "&::-webkit-scrollbar-track":{
              borderRadius:'5px',
              bgcolor: colors.blueAccent[200],
            },
            "&::-webkit-scrollbar-thumb" :{
              borderRadius:'5px',
              bgcolor: colors.blueAccent[100],
            },
          }}
            components={{
              Toolbar: GridToolbar,
              }}
            rows={data4}
            columns={columns1}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20, 30]}
            pagination
            {...data1}
          />
        </Box>
      </Box>
      <Box m="20px"  >
        <Typography variant="h1" color={colors.redAccent[500]} fontWeight="bold">Table V</Typography>
            <Typography variant="h5" color='orange'>
               <span>Show the data of top 10 cities </span>
              <span >which have the highest </span>
              <span >number of users and their average income.</span>
            </Typography>
        <Box
        m="40px 0 10 0"
        height="90vh"
        overflow= "auto" 
        sx={{
          "& .MuiDataGrid-root": {
              border: "none",
              overflow: "auto",
              minWidth: {xs:'1100px',sm:'1100px',md:'1100px',lg:'1000px'}
            },
        }}
        >
          <DataGrid
            sx={{
            
            "& .MuiDataGrid-cell": {
              borderBottom: `2px solid ${colors.grey[300]}`,
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
              fontSize:15,
            },
            "& .name-column--cell1": {
              fontSize:15,
            },
            "& .name-column--cell2": {
              color: colors.grey[300],
              fontSize:15,
              
            },
            "& .name-column--cell3": {
              color: "orange",
              fontSize:15,
              
            },
            "& .MuiDataGrid-columnHeaders": {
              bgcolor:  colors.blueAccent[400],
              borderBottom: "none",
              borderRadius: "10px 10px 0px 0px",
              height:"30px",
              fontSize:16,
            },
            "& .MuiDataGrid-virtualScroller": {
              bgcolor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              borderRadius: "0px 0px 10px 10px",
              fontSize:16,
              bgcolor: colors.blueAccent[400],
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
              fontSize:14,
            }, 
            "&::-webkit-scrollbar-track":{
              borderRadius:'5px',
              bgcolor: colors.blueAccent[200],
            },
            "&::-webkit-scrollbar-thumb" :{
              borderRadius:'5px',
              bgcolor: colors.blueAccent[100],
            },
          }}
            components={{
              Toolbar: GridToolbar,
              }}
            rows={data5}
            columns={columns2}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20, 30]}
            pagination
            {...data5}
          />
        </Box>
      </Box>
      <Box m="20px"  >
        <Typography variant="h1" color={colors.redAccent[500]} fontWeight="bold">Table VI</Typography>
            <Typography variant="h5" color='orange'>
              Shows all the users.
            </Typography>
        <Box
        m="40px 0 10 0"
        height="90vh"
        overflow= "auto" 
        sx={{
          "& .MuiDataGrid-root": {
              border: "none",
              overflow: "auto",
              minWidth: {xs:'1100px',sm:'1100px',md:'1100px',lg:'1000px'}
            },
        }}
        >
          <DataGrid
            sx={{
            
            "& .MuiDataGrid-cell": {
              borderBottom: `2px solid ${colors.grey[300]}`,
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
              fontSize:15,
            },
            "& .name-column--cell1": {
              fontSize:15,
            },
            "& .name-column--cell2": {
              color: colors.grey[300],
              fontSize:15,
              
            },
            "& .name-column--cell3": {
              color: "orange",
              fontSize:15,
              
            },
            "& .MuiDataGrid-columnHeaders": {
              bgcolor:  colors.blueAccent[400],
              borderBottom: "none",
              borderRadius: "10px 10px 0px 0px",
              height:"30px",
              fontSize:16,
            },
            "& .MuiDataGrid-virtualScroller": {
              bgcolor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              borderRadius: "0px 0px 10px 10px",
              fontSize:16,
              bgcolor: colors.blueAccent[400],
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
              fontSize:14,
            }, 
            "&::-webkit-scrollbar-track":{
              borderRadius:'5px',
              bgcolor: colors.blueAccent[200],
            },
            "&::-webkit-scrollbar-thumb" :{
              borderRadius:'5px',
              bgcolor: colors.blueAccent[100],
            },
          }}
            components={{
              Toolbar: GridToolbar,
              }}
            rows={data6}
            columns={columns1}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20, 30]}
            pagination
            {...data6}
          />
        </Box>
      </Box>
    </>
  )
}

export default Table;
