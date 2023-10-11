import SideBar from './SideBar'
import './style.css'

const Admin_Main = ({ data }) => {

  return (
    <div style={{ display: 'flex', marginTop: 70 }}>
      <SideBar />
      <div className='bg-light p-4 mx-4'>
        {data}
      </div>
    </div>
  )
}

export default Admin_Main