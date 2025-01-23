import React from 'react'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import OverViewDashboardPage from '@/components/Dashboard/Admin/Dashboard/OverView'

const Admin = async () => {
    
  return (
            <>
                <p>
                    <OverViewDashboardPage />
                </p>
            </>
  )
}

export default Admin