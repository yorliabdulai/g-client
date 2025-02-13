
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  GraduationCap, 
  BarChart3,
  Settings,
  LogOut
} from 'lucide-react';

const mainNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/', active: true },
  { icon: FileText, label: 'Invoices', path: '/admin/invoices' },
  { icon: Users, label: 'Learners', path: '/admin/learners' },
  { icon: GraduationCap, label: 'Courses', path: '/admin/courses' },
  { icon: BarChart3, label: 'Report', path: '/admin/report' }
];

const bottomNavItems = [
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: LogOut, label: 'Logout', path: '/logout' }
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-700 text-white flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 border-b border-blue-600">
        <div className="flex items-center text-xl font-bold">
          <span>CLient</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {mainNavItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center space-x-3 p-2 rounded-lg ${
                item.active ? 'bg-blue-800' : 'hover:bg-blue-600'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Bottom Navigation */}
      <nav className="p-4 border-t border-blue-600">
        <div className="space-y-2">
          {bottomNavItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-600"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;