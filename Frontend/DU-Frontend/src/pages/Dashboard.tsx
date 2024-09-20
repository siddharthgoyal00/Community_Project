
import { Appbar } from "../components/AppBar"
import  Card    from "../components/Card"
export const Dashboard = ()=>{
    return <div className="bg-gray-900 min-h-screen">
         <Appbar></Appbar>
         <div>
            <Card></Card>
           
         </div>
    </div>
}