import React, { useEffect } from 'react'
import {
  FilePenLineIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloudIcon,
  XIcon,
} from 'lucide-react'
import { dummyResumeData } from '../assets/assets/assets'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [allresumes, setAllresumes] = React.useState([])
  const [showCreateResume, setShowCreateResume] = React.useState(false)
  const [showUploadResume, setShowUploadResume] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [resume, setResume] = React.useState(null)
  const [editResumeId, setEditResumeId] = React.useState('')

  const navigate = useNavigate()

  const colors = ['#9333ea', '#d97706', '#dc2626', '#084c7a', '#16a34a']

  // --- Create Resume ---
  const createResume = async (event) => {
    event.preventDefault()
    if (!title.trim()) return
    setShowCreateResume(false)
    setTitle('')
    navigate(`/app/builder/resume124`)
  }

  // --- Upload Resume ---
  const uploadResume = async (event) => {
    event.preventDefault()
    if (!title.trim() || !resume) return
    setShowUploadResume(false)
    setTitle('')
    setResume(null)
    navigate(`/app/builder/resume124`)
  }

  // --- Load Dummy Data ---
  const loadAllResumes = async () => {
    setAllresumes(dummyResumeData)
  }

  // --- Edit Resume Title ---
  const editTitle = async (event) => {
    event.preventDefault()
    if (!title.trim()) return

    setAllresumes((prev) =>
      prev.map((item) =>
        item._id === editResumeId ? { ...item, title } : item
      )
    )
    setEditResumeId('')
    setTitle('')
  }

  // --- Delete Resume ---
  const deleteResume = (id) => {
    const confirm=
    setAllresumes((prev) => prev.filter((item) => item._id !== id))
  }

  useEffect(() => {
    loadAllResumes()
  }, [])

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden'>
          Welcome Joe, Doe
        </p>

        {/* --- Create / Upload Buttons --- */}
        <div className='flex gap-4 flex-wrap'>
          <button
            onClick={() => setShowCreateResume(true)}
            className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center
            justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300
            group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer'
          >
            <PlusIcon
              className='size-11 transition-all duration-300 p-2.5
              bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full'
            />
            <p className='text-sm group-hover:text-indigo-600 transition-all duration-300'>
              Create Resume
            </p>
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center
            justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300
            group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer'
          >
            <UploadCloudIcon
              className='size-11 transition-all duration-300 p-2.5
              bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full'
            />
            <p className='text-sm group-hover:text-purple-600 transition-all duration-300'>
              Upload Existing
            </p>
          </button>
        </div>

        <hr className='my-6 sm:w-[350px] border-slate-300' />

        {/* --- Resume Cards --- */}
        <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
          {allresumes.map((resume, index) => {
            const baseColor = colors[index % colors.length]
            return (
              <button
                key={index}
                onClick={() => navigate(`/app/builder/${resume._id}`)}
                className='relative w-full sm:max-w-36 h-48 rounded-lg
                flex flex-col items-center gap-4 border group justify-center hover:shadow-lg transition-all duration-300 cursor-pointer'
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: baseColor + '40',
                }}
              >
                <FilePenLineIcon
                  className='size-7 group-hover:scale-105 transition-all'
                  style={{ color: baseColor }}
                />
                <p
                  className='text-sm group-hover:scale-105 px-2 text-center transition-all'
                  style={{ color: baseColor }}
                >
                  {resume.title}
                </p>
                <p
                  className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center'
                  style={{ color: baseColor + '90' }}
                >
                  updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                <div className='absolute top-1 right-1 group-hover:flex items-center hidden'>
                  <TrashIcon
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteResume(resume._id)
                    }}
                    className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors cursor-pointer'
                  />
                  <PencilIcon
                    onClick={(e) => {
                      e.stopPropagation()
                      setEditResumeId(resume._id)
                      setTitle(resume.title)
                    }}
                    className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors cursor-pointer'
                  />
                </div>
              </button>
            )
          })}
        </div>

        {/* --- Popup Modal for Create Resume --- */}
        {showCreateResume && (
          <div
            onClick={() => setShowCreateResume(false)}
            className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'
            >
              <h2 className='text-xl font-semibold mb-4 text-slate-700'>
                Create a Resume
              </h2>

              <form onSubmit={createResume}>
                <input
                  type='text'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Enter Resume Title'
                  className='w-full px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent mb-4'
                  required
                />

                <button
                  type='submit'
                  className='w-full px-3 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition-colors'
                >
                  Create Resume
                </button>
              </form>

              <XIcon
                onClick={() => {
                  setShowCreateResume(false)
                  setTitle('')
                }}
                className='size-8 absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full cursor-pointer transition-colors'
              />
            </div>
          </div>
        )}

        {/* --- Popup Modal for Upload Resume --- */}
        {showUploadResume && (
          <div
            onClick={() => setShowUploadResume(false)}
            className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'
            >
              <h2 className='text-xl font-semibold mb-4 text-slate-700'>
                Upload Resume
              </h2>

              <form onSubmit={uploadResume}>
                <input
                  type='text'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Enter Resume Title'
                  className='w-full px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent mb-4'
                  required
                />

                <label htmlFor='resume-input' className='block text-sm text-slate-700'>
                  Select Resume File:
                  <div
                    className='flex flex-col items-center justify-center gap-2 border group
                    text-slate-600 border-dashed border-slate-300
                    hover:border-green-500 hover:shadow-lg transition-all duration-300 p-3 mt-1 rounded-lg cursor-pointer'
                  >
                    {resume ? (
                      <p className='text-sm text-green-600 font-medium'>
                        {resume.name}
                      </p>
                    ) : (
                      <>
                        <UploadCloudIcon className='size-14 stroke-1 text-green-600' />
                        <p>Upload Resume</p>
                      </>
                    )}
                  </div>
                </label>

                <input
                  id='resume-input'
                  type='file'
                  accept='.pdf,.doc,.docx'
                  className='hidden'
                  onChange={(e) => setResume(e.target.files[0])}
                  required
                />

                <button
                  type='submit'
                  className='w-full mt-4 px-3 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition-colors'
                >
                  Upload Resume
                </button>
              </form>

              <XIcon
                onClick={() => {
                  setShowUploadResume(false)
                  setTitle('')
                  setResume(null)
                }}
                className='size-8 absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full cursor-pointer transition-colors'
              />
            </div>
          </div>
        )}

        {/* --- Popup Modal for Edit Resume --- */}
        {editResumeId && (
          <div
            onClick={() => setEditResumeId('')}
            className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'
            >
              <h2 className='text-xl font-semibold mb-4 text-slate-700'>
                Edit Resume Title
              </h2>

              <form onSubmit={editTitle}>
                <input
                  type='text'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Enter Resume Title'
                  className='w-full px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent mb-4'
                  required
                />

                <button
                  type='submit'
                  className='w-full px-3 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition-colors'
                >
                  Update
                </button>
              </form>

              <XIcon
                onClick={() => {
                  setEditResumeId('')
                  setTitle('')
                }}
                className='size-8 absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full cursor-pointer transition-colors'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
