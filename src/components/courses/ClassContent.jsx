import React, { useEffect, useState } from "react";

import { FaCirclePlay } from "react-icons/fa6";
import { getCourseVideo } from "../../api/course";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCross } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const ClassContent = () => {
  const [classData, setClassData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate=useNavigate()
  // Extract subject from URL
  const queryParams = new URLSearchParams(location.search);
  const subject = queryParams.get("subject");

  useEffect(() => {
    getCourseVideo()
      .then(response => {
        // Filter videos by batch and selected subject
        const userBatchVideos = response.data.filter(
          video => video.batch === user._doc?.batch && video.subject === subject
        );

        setClassData(userBatchVideos);
        if (userBatchVideos.length > 0) {
          setSelectedVideo(userBatchVideos[0]);
        }
      })
      .catch(error => {
        console.error("Error fetching class content:", error);
      });
  }, [user, subject]);

  if (classData.length === 0) {
    return <h1 className="text-center text-xl font-bold mt-6">No videos available for {subject}</h1>;
  }

  return (
    <div>
     
      <h2 className="text-2xl font-extrabold px-6 mt-6 flex justify-between">
        <h1>Watch {subject} Videos</h1>
      <button onClick={()=>navigate(-1)}><RxCross1  className=""/></button>
      </h2>

      {selectedVideo && (
        <iframe
          width="560"
          height="315"
          src={selectedVideo.videoUrl}
          title="YouTube Video"
          className="rounded-lg w-full px-6 h-96 py-6"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
 
      <div className="ml-6 text-xl">
        {classData.map((video, index) => (
          <button
            key={index}
            onClick={() => setSelectedVideo(video)}
            className="flex items-center space-x-2 mb-2"
          >
            <FaCirclePlay className="text-blue-500" />
            <span className="first-letter:uppercase">{video.subject}</span>
            <span className="first-letter:uppercase">Day: {video.day}</span>
            <span className="first-letter:uppercase">{video.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClassContent;
