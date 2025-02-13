import { useState } from 'react';
import { Search, X } from 'lucide-react';
import Sidebar from '../../components/Sidebar';

// Sample data
const learnersData = [
  { id: 1, name: 'John Doe', course: 'Software Development', amount: 450.00, date: 'Nov 1', email: 'johndoe@gmail.com', program: 'Software Development', gender: 'Male', contact: '+23341000012', location: 'Accra, Ghana', bio: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: 2, name: 'John Doe', course: 'Data Science', amount: 450.00, date: 'Nov 1' },
  { id: 3, name: 'John Doe', course: 'Data Science', amount: 450.00, date: 'Nov 1' },
  { id: 4, name: 'John Doe', course: 'Cloud Computing', amount: 450.00, date: 'Nov 1' },
  { id: 5, name: 'John Doe', course: 'Software Development', amount: 450.00, date: 'Nov 1' },
  { id: 6, name: 'John Doe', course: 'Software Development', amount: 450.00, date: 'Nov 1' },
];

const LearnersPage = () => {
  const [selectedLearner, setSelectedLearner] = useState<Learner | null>(null);
  const [showUserDetails, setShowUserDetails] = useState(false);

interface Learner {
    id: number;
    name: string;
    course: string;
    amount: number;
    date: string;
    email?: string;
    program?: string;
    gender?: string;
    contact?: string;
    location?: string;
    bio?: string;
}

const handleLearnerClick = (learner: Learner): void => {
    setSelectedLearner(learner);
    setShowUserDetails(true);
};

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-semibold mb-6">Learners</h1>
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search learners"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Learners</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Course</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {learnersData.map((learner) => (
                  <tr 
                    key={learner.id}
                    onClick={() => handleLearnerClick(learner)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-900">{learner.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{learner.course}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">${learner.amount}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{learner.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-4 border-t">
              <span className="text-sm text-gray-500">1 of 15 pages</span>
            </div>
          </div>
        </div>
      </div>

      {/* User Details Popup */}
      {showUserDetails && selectedLearner && (
        <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-lg">
          <div className="p-6">
            <button 
              onClick={() => setShowUserDetails(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 bg-yellow-400 rounded-full mb-4"></div>
              <h2 className="text-xl font-semibold">{selectedLearner.name}</h2>
              <p className="text-gray-500">{selectedLearner.email}</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">Program</label>
                <p className="font-medium">{selectedLearner.program}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Gender</label>
                <p className="font-medium">{selectedLearner.gender}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Contact</label>
                <p className="font-medium">{selectedLearner.contact}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Location</label>
                <p className="font-medium">{selectedLearner.location}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Paid</label>
                <p className="font-medium">${selectedLearner.amount}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Bio</label>
                <p className="text-sm text-gray-600">{selectedLearner.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearnersPage;