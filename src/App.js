import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=28950148-c357efc5a3a05fffe26189412&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((res) => {
        setImages(res.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="container mx-auto ml-10">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">
          No Image Found...
        </h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32 text-rose-900">
          Loading...
        </h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
