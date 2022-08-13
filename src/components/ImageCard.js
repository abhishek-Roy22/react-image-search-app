import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="container mx-auto">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src={image.webformatURL}
          alt=""
          className="w-full object-fit h-80"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-rose-500 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
