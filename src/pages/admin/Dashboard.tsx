import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Sidebar from '@/components/Sidebar';
import {  
  FileText, 
  Users, 
  Moon,
  DollarSign,
  Clock
} from 'lucide-react';

const revenueData = [
  { month: 'Jan', amount: 15000 },
  { month: 'Feb', amount: 18000 },
  { month: 'Mar', amount: 16000 },
  { month: 'Apr', amount: 12000 },
  { month: 'May', amount: 17000 },
  { month: 'Jun', amount: 19000 },
  { month: 'Jul', amount: 22000 },
  { month: 'Aug', amount: 20000 },
  { month: 'Sep', amount: 18000 },
  { month: 'Oct', amount: 21000 },
  { month: 'Nov', amount: 19000 },
  { month: 'Dec', amount: 25000 }
];

const learnerData = [
  { id: 1, name: 'Jane Cooper', role: 'Software Developer', amount: 420.00, avatar: '/api/placeholder/32/32' },
  { id: 2, name: 'Savannah Nguyen', role: 'Data Science', amount: 420.00, avatar: '/api/placeholder/32/32' },
  { id: 3, name: 'Jerome Bell', role: 'Data Science', amount: 420.00, avatar: '/api/placeholder/32/32' },
  { id: 4, name: 'Theresa Webb', role: 'Cloud Engineer', amount: 420.00, avatar: '/api/placeholder/32/32' },
  { id: 5, name: 'Ralph Edwards', role: 'Software Developer', amount: 420.00, avatar: '/api/placeholder/32/32' }
];


const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white p-4 flex justify-between items-center border-b">
          <div>
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, John</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Moon className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                JD
              </div>
              <span>John Doe</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-500">Collected</span>
                </div>
                <p className="text-2xl font-bold mt-2">$20000</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-500">Pending</span>
                </div>
                <p className="text-2xl font-bold mt-2">$10000</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-500">Total Invoices</span>
                </div>
                <p className="text-2xl font-bold mt-2">35</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-500">Total Learners</span>
                </div>
                <p className="text-2xl font-bold mt-2">50</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts and Lists */}
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Recent Revenue</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Bar dataKey="amount" fill="#2563eb" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Latest Invoices</h2>
                <div className="space-y-4">
                  {learnerData.map((learner) => (
                    <div key={learner.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={learner.avatar}
                          alt={learner.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{learner.name}</p>
                          <p className="text-sm text-gray-500">{learner.role}</p>
                        </div>
                      </div>
                      <p className="font-medium">${learner.amount.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;