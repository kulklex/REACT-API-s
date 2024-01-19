import React from "react";

const ImageCard = ({ image, searchText, setText, term, setTerm }) => {
  const tags = image?.tags.split(",");

  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg">
      <img style={{maxHeight: 250, height:250}} src={image?.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image?.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image?.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image?.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image?.likes}
          </li>
        </ul>
      </div>

      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => {
              setText(tag)
              searchText(tag)
            }}
            className="inline-block bg-gray-200 rounded-full px-3 py-3 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
