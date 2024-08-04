"use client"
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const [image, setimage] = useState(false);
  const [data, setdata] = useState(
    {
      title:"",
      description:"",
      category:"StartUp",
      author:"Alex Benett",
      authorImage:"/author_img.png"
    }
  )

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setdata(data=>({...data,[name]:value}));
    console.log(data);
  }

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("title",data.title);
    formData.append("description",data.description);
    formData.append("category",data.category);
    formData.append("author",data.author);
    formData.append("authorImage",data.authorImage);
    formData.append("image",image);

    const response=await axios.post("/api/blog",formData);
    if(response.data.success){
      toast.success(response.data.msg);
      setimage(false);
      setdata(
        {
          title:"",
      description:"",
      category:"StartUp",
      author:"Alex Benett",
      authorImage:"/author_img.png"
        }
      )
    }
    else{
      toast.error("Error");
    }

  }
  return (
    <>
    <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
      <p className='text-xl'>Upload Thumbnail</p>

      <label htmlFor='image'>
        <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt='' />
      </label>
      <input onChange={(e)=>setimage(e.target.files[0])} type='file' id="image" hidden required/>
      <p className='text-xl mt-4'>Blog Title</p>
      <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 py-3 border' type='text' placeholder='Type Here' required />

      <p className='text-xl mt-4'>Blog Description</p>
      <textarea name="description" onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 py-3 border' type='text' placeholder='Write Content Here' rows={6} required />

      <p className='text-xl mt-4'>Blog Category</p>
      <select name='category' onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
        <option value="StartUp">StartUp</option>
        <option value="Technology">Technology</option>
        <option value="LifeStyle">LifeStyle</option>
      </select>
      <br/>
      <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>ADD</button>
    </form>
    </>
  )
}

export default page
