import React from "react";
import { useForm } from "react-hook-form";

import { addCourseVideo } from "../../api/course";
const PostClassVideo = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const videoUrl = watch("videoUrl", "");
  const previewUrl = videoUrl.includes("youtube.com/embed/") ? videoUrl : "";

  const onSubmit = async (data) => {
    if (!data.videoUrl.includes("youtube.com/embed/")) {
      alert("Please enter a valid YouTube embed URL!");
      return;
    }
    
   
      addCourseVideo(data).then((response)=>{
        alert("Class video posted successfully!");
        reset();
      }).catch((eror)=>{
        console.error("Error posting video:", error);
        alert("Failed to post video.");
      })
     
   
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Post Class Video</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Class Title:</label>
          <input
            {...register("title", { required: "Class title is required" })}
            placeholder="Enter class title"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title?.message}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Subject:</label>
          <input
            {...register("subject", { required: "Class subject is required" })}
            placeholder="Enter class subject"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.subject?.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Batch:</label>
          <input
            {...register("batch", { required: "Batch is required" })}
            placeholder="Enter batch"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.batch && <p className="text-red-500 text-sm">{errors.batch?.message}</p>}
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium">Day:</label>
          <input
            {...register("day", { required: "Day is required" })}
            placeholder="Enter day"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.day && <p className="text-red-500 text-sm">{errors.day?.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">YouTube Embed URL:</label>
          <input
            {...register("videoUrl", { required: "Video URL is required" })}
            placeholder="Enter YouTube embed URL"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.videoUrl && <p className="text-red-500 text-sm">{errors.videoUrl?.message}</p>}
        </div>

        {previewUrl && (
          <div className="mt-4">
            <label className="block text-gray-700 font-medium">Preview:</label>
            <iframe
              width="100%"
              height="250"
              src={previewUrl}
              title="YouTube Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Post Video
        </button>
      </form>
    </div>
  );
};

export default PostClassVideo;