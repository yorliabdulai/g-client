import { Calendar, ChevronDown, User, DollarSign, Clock, FileText } from 'lucide-react';
import Sidebar from './Sidebar';
import { Moon } from 'lucide-react';
export default function CreateInvoiceForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="h-screen bg-gray-100">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white p-4 flex justify-between items-center border-b">
          <div className="flex items-center space-x-2 text-gray-600">
            <span>Invoices</span>
            <span>/</span>
            <span className="text-black">Create Invoice</span>
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

        {/* Form Content */}
        <main className="p-6 max-w-3xl mx-auto">
          <div className="space-y-4">
            {/* Select Learner */}
            <div className="relative">
              <div className="flex items-center border rounded-lg p-3 bg-white cursor-pointer hover:border-blue-500">
                <User className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-400">Select learner</span>
                <ChevronDown className="w-5 h-5 text-gray-400 ml-auto" />
              </div>
            </div>

            {/* Amount Input */}
            <div className="relative">
              <div className="flex items-center border rounded-lg p-3 bg-white hover:border-blue-500">
                <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Enter amount in USD" 
                  className="w-full outline-none text-gray-600"
                />
              </div>
            </div>

            {/* Collection Date */}
            <div className="relative">
              <div className="flex items-center border rounded-lg p-3 bg-white hover:border-blue-500">
                <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Collection date" 
                  className="w-full outline-none text-gray-600"
                />
              </div>
            </div>

            {/* Status */}
            <div className="relative">
              <div className="flex items-center border rounded-lg p-3 bg-white cursor-pointer hover:border-blue-500">
                <Clock className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-400">Status</span>
                <ChevronDown className="w-5 h-5 text-gray-400 ml-auto" />
              </div>
            </div>

            {/* Payment Details */}
            <div className="relative">
              <div className="flex items-center border rounded-lg p-3 bg-white hover:border-blue-500">
                <FileText className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Payment details" 
                  className="w-full outline-none text-gray-600"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 mt-6">
              <button 
                onClick={onClose}
                className="px-4 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200 text-gray-600"
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Create Invoice
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
