import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCirclePlay } from "react-icons/fa6";
import { getCourseVideo } from "../../api/course";
import { useSelector } from "react-redux";

const ClassContent = () => {
  const [classData, setClassData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getCourseVideo()
      .then(response => {
        const userBatchVideos = response.data.filter(video => video.batch === user._doc.batch);
        setClassData(userBatchVideos);
        if (userBatchVideos.length > 0) {
          setSelectedVideo(userBatchVideos[0]);
        }
      })
      .catch(error => {
        console.error("Error fetching class content:", error);
      });
  }, [user]);

  if (classData.length === 0) {
    return <h1 className="text-center text-xl font-bold mt-6">No videos available for your batch</h1>;
  }

  return (
    <div>
      <h2 className="text-2xl font-extrabold px-6 mt-6">Watch videos</h2>
      {classData.length > 0 ? (
        <div className="space-y-3">
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
                <span className="first-letter:uppercase">Day: {video.day}</span> <span className="first-letter:uppercase">{video.title} | Batch: {video.batch}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="w-full text-center">Loading videos...</p>
      )}
    </div>
  );
};

export default ClassContent;
