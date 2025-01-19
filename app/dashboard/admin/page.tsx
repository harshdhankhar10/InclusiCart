import React from 'react'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

const Admin = async () => {
    
  return (
            <>
                <p>
                    This is the admin page
                </p>
            </>
  )
}

export default Admin