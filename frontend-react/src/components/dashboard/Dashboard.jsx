import React, {useEffect} from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosInstance'

const Dashboard = () => {
    useEffect(()=>{
        const fetchProtectedData = async () =>{
            try{
                const response = await axiosInstance.get('/protected-view/');
                console.log('success: ', response.data);    
            }catch(error) {
                console.error(error);
                
            }
        }
        fetchProtectedData();
    }, [])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard