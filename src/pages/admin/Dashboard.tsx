// src/pages/admin/Dashboard.tsx
import React from 'react';
import Card from '../../components/Card';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      {/* Welcome Message */}
      <h1 className="text-2xl font-semibold text-text-primary mb-6">
        Welcome back, John
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white border border-border-color rounded-lg shadow-md p-4">
          <div className="font-semibold text-lg text-gray-text mb-2">Collected</div>
          <div className="text-2xl font-bold text-text-primary">$20000</div>
        </Card>

        <Card className="bg-white border border-border-color rounded-lg shadow-md p-4">
          <div className="font-semibold text-lg text-gray-text mb-2">Pending</div>
          <div className="text-2xl font-bold text-text-primary">$10000</div>
        </Card>

        <Card className="bg-white border border-border-color rounded-lg shadow-md p-4">
          <div className="font-semibold text-lg text-gray-text mb-2">Total Invoices</div>
          <div className="text-2xl font-bold text-text-primary">35</div>
        </Card>

        <Card className="bg-white border border-border-color rounded-lg shadow-md p-4">
          <div className="font-semibold text-lg text-gray-text mb-2">Total Learners</div>
          <div className="text-2xl font-bold text-text-primary">50</div>
        </Card>
      </div>

      {/* Recent Revenue Chart */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Recent Revenue</h2>
        <Card className="bg-white border border-border-color rounded-lg shadow-md p-4">
          {/* Placeholder Chart */}
          <div className="text-center py-12 text-gray-text">Chart Placeholder</div>
        </Card>
      </div>

      {/* Latest Invoices */}
      <div>
        <h2 className="text-xl font-semibold text-text-primary mb-4">Latest Invoices</h2>
        <Card className="bg-white border border-border-color rounded-lg shadow-md p-4">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-light-gray">
                <th className="border-b py-2 px-4 text-left text-sm font-semibold text-gray-text">Name</th>
                <th className="border-b py-2 px-4 text-left text-sm font-semibold text-gray-text">Details</th>
                <th className="border-b py-2 px-4 text-left text-sm font-semibold text-gray-text">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b py-2 px-4 text-sm text-text-primary">Jane Cooper</td>
                <td className="border-b py-2 px-4 text-sm text-text-primary">Software Development</td>
                <td className="border-b py-2 px-4 text-sm text-text-primary">$420.00</td>
              </tr>
              <tr>
                <td className="border-b py-2 px-4 text-sm text-text-primary">Savannah Nguyen</td>
                <td className="border-b py-2 px-4 text-sm text-text-primary">Data Science</td>
                <td className="border-b py-2 px-4 text-sm text-text-primary">$420.00</td>
              </tr>
              <tr>
                <td className="border-b py-2 px-4 text-sm text-text-primary">Jerome Bell</td>
                <td className="border-b py-2 px-4 text-sm text-text-primary">Data Science</td>
                <td className="border-b py-2 px-4 text-sm text-text-primary">$420.00</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;