import { checkUser } from "@/lib/checkUser"
import { UserButton } from "@clerk/nextjs";


export default function Navbar() {
  const user = checkUser();

  return (
    <div>
      Navbar baby!!!
         <UserButton afterSignOutUrl="/sign-in" />
    </div>

    
  )
}
