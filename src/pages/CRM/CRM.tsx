import { Outlet } from "react-router-dom"

export const CRM = () => {
    return (
        <>
            <div className="font-justOutline text-[20px]">CRM</div>
            <Outlet />
        </>
    )
}