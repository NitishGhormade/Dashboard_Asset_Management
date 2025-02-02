import Link from "next/link"
import { Home, LayoutDashboard, Settings } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

