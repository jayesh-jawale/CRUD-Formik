import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { FaComments } from 'react-icons/fa';

export function GenerateReports() {
    const styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '20px'
    }
    return (
    <div>
    <div style={styles}>
       <h1 style={{lineHeight: "1.2", fontWeight: '400'}}>Dashboard</h1>
       <Button style={{fontSize: '.875rem', borderRadius: '0.2rem'}} variant="contained">
       <FileDownloadIcon/>
        Generate Report
       </Button>
    </div>
    <DashboardCards/>
    </div>
    )
  }

  function DashboardCards() {
      return (
          <div className='dashboard-cards-flex'>

          <div className='dashboard-card monthly'>
            <div className='dashboard-card-content'>
              <p style={{color: '#4e73df', fontSize: '.7rem', fontWeight: '700'}}>EARNINGS (MONTHLY)</p>
              <p style={{fontSize: '1.25rem'}}>$40,000</p>
            </div>
            <div className='dashboard-card-logo'>
                <CalendarTodayIcon/>
            </div>
          </div>

          <div className='dashboard-card annual'>
            <div className='dashboard-card-content'>
              <p style={{color: '#1cc88a', fontSize: '.7rem', fontWeight: '700'}}>EARNINGS (ANNUAL)</p>
              <p style={{fontSize: '1.25rem'}}>$215,000</p>
            </div>
            <div className='dashboard-card-logo'>
                <AttachMoneyIcon/>
            </div>
          </div>

          <div className='dashboard-card annual tasks'>
            <div className='dashboard-card-content'>
              <p style={{color: '#36b9cc', fontSize: '.7rem', fontWeight: '700'}}>TASKS</p>
              <p style={{fontSize: '1.25rem', display: 'flex'}}>50%</p>
            </div>
            <Box sx={{ width: '35%' }}>
				    	  <LinearProgress variant="determinate" value={50} className="progress-bar" />
				    </Box>
            <div className='dashboard-card-logo'>
                <AssignmentIcon/>
            </div>
          </div>

          <div className='dashboard-card annual pending-requests'>
            <div className='dashboard-card-content'>
              <p style={{color: '#f6c23e', fontSize: '.7rem', fontWeight: '700'}}>PENDING REQUESTS</p>
              <p style={{fontSize: '1.25rem', display: 'flex'}}>18%</p>
            </div>

            <div className='dashboard-card-logo'>
                <FaComments/>
            </div>
          </div>
        </div>
      )
  }