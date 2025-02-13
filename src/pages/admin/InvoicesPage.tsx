import { Search, Moon, Pencil, Trash2 } from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const invoicesData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'JohnDoe100@gmail.com',
    amount: 450.00,
    date: 'Nov 17, 2024',
    status: 'Paid',
    avatar: '/api/placeholder/32/32'
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'JohnDoe100@gmail.com',
    amount: 450.00,
    date: 'Nov 17, 2024',
    status: 'Paid',
    avatar: '/api/placeholder/32/32'
  },
  {
    id: 3,
    name: 'John Doe',
    email: 'JohnDoe100@gmail.com',
    amount: 450.00,
    date: 'Nov 17, 2024',
    status: 'Pending',
    avatar: '/api/placeholder/32/32'
  },
  {
    id: 4,
    name: 'John Doe',
    email: 'JohnDoe100@gmail.com',
    amount: 450.00,
    date: 'Nov 17, 2024',
    status: 'Pending',
    avatar: '/api/placeholder/32/32'
  },
  {
    id: 5,
    name: 'John Doe',
    email: 'JohnDoe100@gmail.com',
    amount: 450.00,
    date: 'Nov 17, 2024',
    status: 'Paid',
    avatar: '/api/placeholder/32/32'
  },
  {
    id: 6,
    name: 'John Doe',
    email: 'JohnDoe100@gmail.com',
    amount: 450.00,
    date: 'Nov 17, 2024',
    status: 'Paid',
    avatar: '/api/placeholder/32/32'
  }
];

const InvoicesPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white p-4 flex justify-between items-center border-b">
          <h1 className="text-xl font-semibold">Invoices</h1>
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

        {/* Invoice Content */}
        <main className="p-6">
          <div className="bg-white rounded-lg shadow">
            {/* Search and Create Invoice */}
            <div className="p-4 flex justify-between items-center border-b">
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search Invoices"
                  className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <span>Create Invoice</span>
                <span className="text-xl">+</span>
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-gray-500">Learners</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-500">Email</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-500">Amount</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-500">Date</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-500">Status</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-500"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {invoicesData.map((invoice) => (
                    <tr key={invoice.id} className="hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={invoice.avatar}
                            alt={invoice.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="font-medium">{invoice.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-500">{invoice.email}</td>
                      <td className="p-4">${invoice.amount.toFixed(2)}</td>
                      <td className="p-4 text-gray-500">{invoice.date}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          invoice.status === 'Paid' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {invoice.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 flex items-center justify-between border-t">
              <div className="text-sm text-gray-500">
                of 12 pages
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border rounded hover:bg-gray-50">1</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
                <button className="px-3 py-1 bg-blue-50 border border-blue-600 text-blue-600 rounded">3</button>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Results per page</span>
                  <select className="border rounded p-1">
                    <option>10</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InvoicesPage;