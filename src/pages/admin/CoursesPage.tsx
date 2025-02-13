import React, { useState } from 'react';
import { Search, ChevronRight, Moon, Upload } from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const coursesData = [
  {
    id: 1,
    title: 'Software Engineer Path',
    price: 380.00,
    duration: '12 weeks',
    instructor: 'Benjamin',
    learners: '+200',
    image: '/api/placeholder/400/320'
  },
  {
    id: 2,
    title: 'Cloud Computing Expertise',
    price: 380.00,
    duration: '12 weeks',
    instructor: 'Williams',
    learners: '+200',
    image: '/api/placeholder/400/320'
  },
  {
    id: 3,
    title: 'Data Science Mastery',
    price: 380.00,
    duration: '12 weeks',
    instructor: 'Enoch',
    learners: '+200',
    image: '/api/placeholder/400/320'
  }
];

const CoursesPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header with User Info */}
          <div className="flex justify-end items-center mb-8 space-x-4">
            <button className="p-2 rounded-full">
              <Moon className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                JD
              </div>
              <span className="text-sm">John Doe</span>
            </div>
          </div>

          {!showCreateForm ? (
            <>
              {/* Courses List View */}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Courses</h1>
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                >
                  <span>Create Course</span>
                  <span className="text-xl">+</span>
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search Course"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Course Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesData.map((course) => (
                  <div key={course.id} className="bg-white rounded-lg shadow-sm p-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold mb-4">{course.title}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Price:</span>
                        <span className="font-medium">$ {course.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Instructor:</span>
                        <span className="font-medium">{course.instructor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Learners:</span>
                        <span className="font-medium">{course.learners}</span>
                      </div>
                    </div>
                    <button className="mt-4 text-blue-600 flex items-center text-sm">
                      View more
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Create Course Form */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 text-lg">
                  <span className="text-gray-500">Courses</span>
                  <span>/</span>
                  <span>Create Course</span>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Course Title"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Price"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Instructor"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    type="text"
                    placeholder="Duration"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Stacks</option>
                  </select>

                  <div className="border border-dashed border-gray-300 rounded-lg p-6">
                    <div className="flex items-center justify-center">
                      <Upload className="w-6 h-6 text-gray-400 mr-2" />
                      <span className="text-gray-500">Upload image</span>
                    </div>
                  </div>

                  <textarea
                    placeholder="Description"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  />

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                      Create learner
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;