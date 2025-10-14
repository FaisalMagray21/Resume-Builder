import { BriefcaseBusiness, Globe, Linkedin, Mail, MapPin, Phone, User } from 'lucide-react'
import React from 'react'

const PersonalInfoForm = ({data,onChange,removeBackground,setRemoveBackground}) => {
    const handlechange=(field,value)=>{
        onChange({...data,[field]:value})
    }

    const fields=[
        {
            key:'full_name', label:'Full Name',  type:'text',required:true,icon:User
        },
        {
            key:'email', label:'Email Address',  type:'email',required:true,icon:Mail
        },
        {
            key:'phone', label:'Phone Number',  type:'tel',required:false,icon:Phone
        },
        {
            key:'location', label:'Location',  type:'text',required:false,icon:MapPin
        },
        {
            key:'profession', label:'Profession',  type:'text',required:false,icon:BriefcaseBusiness
        },
        {
            key:'LinkedIn', label:'LinkedIn Profile',  type:'url',required:false,icon:Linkedin
        },
        {
            key:'website', label:'Website',  type:'url',required:false,icon:Globe 
        }
    ]
  return (
    <div>
        <h3 className='text-lg font-semibold text-gray-900'>Personal Information</h3>
        <p className='text-sm text-gray-600'>Get Started with the personal information</p>
        <div className='flex items-center gap-2'>
            <label >
                {data.image ?(
                    <img src={typeof data.image==='string'? data.image:URL.createObjectURL(data.image)} alt="Profile" className='w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80'/>
                ):(
                    <div className='inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer'>
                        <User className='size-20 p-2.5 border rounded-full'/>
                        Upload user Image
                    </div>
                )}
                <input type="file" accept='image/*' className='hidden' onChange={(e)=>
                handlechange('image',e.target.files[0])
                }/>
            </label>
            { typeof data.image === 'object' &&(
                <div className='flex flex-col gap-1 pl-4 text-sm'>
                    <p>Remove Background</p>
                    <label className=' relative inline-flex items-center gap-3 text-sm text-gray-900  cursor-pointer'>
                        <input type="checkbox" className='sr-only peer' checked={removeBackground} onChange={()=>setRemoveBackground(prev=>!prev)}/>
                        <div className='w-9 h-5 bg-slate-300 rounded-full peer  peer-checked:bg-green-600 transition-colors duration-200'></div>
                        <span className='dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full  peer-checked:translate-x-4 transition-transform duration-200 ease-in-out'>

                        </span>

                    </label>

                    </div>
            

                    

            )}

        </div>
        {
            fields.map((field)=>{
                const Icon=field.icon;
                return(
                   < div key={field.key} className='space-y-1 mt-5'>
                    <label className='text-sm font-medium text-gray-700 flex items-center gap-2'>
                        <Icon className='size-4 text-gray-500'/>
                        {field.label
                        } {field.required && <span className='text-red-500'>*</span>}
</label>
                    <input type={field.type} value={data[field.key] || ''} required={field.required} onChange={(e)=>handlechange(field.key,e.target.value)} className='w-full border border-gray-300 rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'placeholder={`Enter your ${field.label.toLowerCase()}`}
                    
                    />
                    </div>
                )
            })
        }
    </div>
  )
}

export default PersonalInfoForm