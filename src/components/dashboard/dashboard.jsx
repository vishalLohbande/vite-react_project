import React from 'react';
import dashboardStyle from './dashboard.module.css'

function C2wDashboard() {
  return (
    <div className={dashboardStyle.C2wDashboard_ctn}>
      <div className={dashboardStyle.C2wDasboard_content_holder}>
        <div className={dashboardStyle.C2wDashboard_sidebar}>
        </div>
        <div className={dashboardStyle.C2wDashBoard_Right_route_ctn}>
          {'Ready to Route'}
        </div>
      </div>
    </div>
  )
}

export default C2wDashboard
