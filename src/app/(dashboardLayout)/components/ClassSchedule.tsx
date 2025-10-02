"use client"

import { Clock, MapPin, User } from 'lucide-react'

export function ClassSchedule() {
  const todaysClasses = [
    {
      time: '৯:০০ - ৯:৪৫',
      subject: 'বাংলা',
      teacher: 'মোঃ করিম',
      room: '২০১ নং রুম',
      type: 'language',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      time: '১০:০০ - ১০:৪৫',
      subject: 'গণিত',
      teacher: 'মোসাঃ ফাতেমা',
      room: '২০১ নং রুম',
      type: 'math',
      color: 'bg-green-100 text-green-600'
    },
    {
      time: '১১:০০ - ১১:৪৫',
      subject: 'ইংরেজি',
      teacher: 'মোঃ রফিক',
      room: '২০২ নং রুম',
      type: 'language',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      time: '১২:০০ - ১২:৪৫',
      subject: 'বিজ্ঞান',
      teacher: 'মোসাঃ আয়েশা',
      room: 'ল্যাব ১০১',
      type: 'science',
      color: 'bg-orange-100 text-orange-600'
    }
  ]

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">আজকের ক্লাস সূচী</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>আজ</span>
        </div>
      </div>
      <div className="space-y-4">
        {todaysClasses.map((classItem, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${classItem.color}`}>
                {classItem.type === 'math' && '📐'}
                {classItem.type === 'science' && '🔬'}
                {classItem.type === 'language' && '📖'}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{classItem.subject}</h3>
                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{classItem.teacher}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{classItem.room}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">{classItem.time}</p>
              <span className="inline-block mt-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                আসছে
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-600 hover:text-blue-600 py-3 rounded-xl font-medium transition-all duration-300">
        সম্পূর্ণ সূচী দেখুন
      </button>
    </div>
  )
}