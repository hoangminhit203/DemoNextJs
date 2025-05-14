"use client"
import { Layout } from "antd"

const AdminFooter = () => {
  const { Footer } = Layout

  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        Minh Demo ©{new Date().getFullYear()} Created by @Minh Demo
      </Footer>
    </>
  )
}

export default AdminFooter
