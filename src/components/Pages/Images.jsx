import React, { useState } from "react";
import { Play, X } from "lucide-react";
import About from "../../assets/About.jpg"; // Right side image

const VideoThumb =
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80";

const videos = [
  { id: "dQw4w9WgXcQ", title: "Never Gonna Give You Up" },
  { id: "3JZ_D3ELwOQ", title: "Charlie Puth - Attention" },
  { id: "kXYiU_JCYtU", title: "Linkin Park - Numb" },
  { id: "hY7m5jjJ9mM", title: "Cat Vibing to Music" },
  { id: "tVj0ZTS4WF4", title: "Shakira - Waka Waka" },
  { id: "L_jWHffIx5E", title: "Smash Mouth - All Star" },
];

const Images = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="h-screen bg-gray-50 p-4">
      {/* Main Two Panels */}
      <div className="flex flex-col lg:flex-row gap-4 h-full">
        {/* Left Panel - Video Thumb */}
        <div
          className="lg:w-1/2 relative flex-1 rounded-md overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${VideoThumb})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <button
              onClick={() => {
                setShowModal(true);
                setSelectedVideo(null);
              }}
              className="bg-red-500 hover:bg-black text-white rounded-full p-6 shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
            >
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </button>
          </div>
        </div>

        {/* Right Panel - Static Image */}
        <div
          className="lg:w-1/2 relative flex-1 rounded-md overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${About})` }}
        >
          <div className="absolute inset-0 bg-opacity-20"></div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col h-screen">
          {/* Close Button */}
          <div className="flex justify-end p-4 shrink-0">
            <button
              onClick={() => setShowModal(false)}
              className="bg-black p-1 rounded-full text-red-500 hover:text-white transition"
            >
              <X size={32} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            {selectedVideo ? (
              <div className="flex flex-col items-center h-full justify-center p-4">
                <div className="w-full max-w-4xl aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <button
                  className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-red-500"
                  onClick={() => setSelectedVideo(null)}
                >
                  Back to Videos
                </button>
              </div>
            ) : (
              <div className="h-full overflow-y-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transform transition"
                      onClick={() => setSelectedVideo(video.id)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="p-2 text-white text-sm">{video.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;
