import React from "react"

export default function DashboardLayout({
    children,
    users,
    revenue,
    analytics
  }: {
    children: React.ReactNode
    users: React.ReactNode
    revenue: React.ReactNode
    analytics: React.ReactNode
  }) {
    return <section>
        <div>{children}</div>
        <div className="flex justify-evenly mt-20 border-2 border-green-500 h-[500px] w-[80%] mx-auto">
            <div className="border-2 w-1/2 flex flex-col justify-evenly">
            <div>{users}</div>
            <div>{revenue}</div>
            </div>
            <div className="flex flex-1">{analytics}</div>
        </div>
        </section>
  }