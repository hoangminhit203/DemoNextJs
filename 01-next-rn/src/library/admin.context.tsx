"use client" // Chỉ định file này chạy phía client trong Next.js App Router (app directory)

import { createContext, useContext, useState } from "react"

// Định nghĩa interface để mô tả dữ liệu mà context sẽ cung cấp
interface IAdminContext {
  collapseMenu: boolean // Trạng thái menu (true: đóng, false: mở)
  setCollapseMenu: (v: boolean) => void // Hàm để thay đổi trạng thái menu
}

// Khởi tạo context với giá trị ban đầu là null
export const AdminContext = createContext<IAdminContext | null>(null)

// Tạo Provider để cung cấp context cho các component con
export const AdminContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  // Sử dụng useState để quản lý trạng thái collapseMenu, mặc định là false
  const [collapseMenu, setCollapseMenu] = useState(false)

  return (
    // Cung cấp context cho các component con thông qua Provider
    <AdminContext.Provider value={{ collapseMenu, setCollapseMenu }}>
      {children}
    </AdminContext.Provider>
  )
}

// Custom hook để sử dụng context dễ dàng hơn trong các component
export const useAdminContext = () => useContext(AdminContext)
