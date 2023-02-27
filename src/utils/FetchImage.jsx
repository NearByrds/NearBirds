const API_KEY = "a083262bdc7ee37402a4e14e452025ed";

const fetchImage = async (bird, setImageUrl) => {
  try {
    const res = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${bird.en} Grouse&format=json&nojsoncallback=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
    const results = await res.json();
    const imageLink = `https://farm${results.photos.photo[0].farm}.staticflickr.com/${results.photos.photo[0].server}/${results.photos.photo[0].id}_${results.photos.photo[0].secret}.jpg`;
    setImageUrl(imageLink);
    return "";
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchImage;
