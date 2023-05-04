const API_KEY = "e9290d9003214f65211d8b8594b6957c";
import * as Sentry from "@sentry/browser";

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
    Sentry.captureException(err);

    console.log(error.message);
  }
};

export default fetchImage;
