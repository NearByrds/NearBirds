import * as Sentry from "@sentry/browser";

const fetchImage = async (bird, setImageUrl) => {
    const searchText = bird.en.toLowerCase()
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Accept-Language": "en-US",
        }
    }
    try {
        const fileNameReq = await fetch(
            `https://en.wikipedia.org/w/api.php?action=parse&prop=images&page=${searchText}&format=json&origin=*`,
            options
        );
        const fileNameResp = await fileNameReq.json();
        const fileNames = fileNameResp.parse.images.filter(
            item => item.toLowerCase().includes(searchText.replace(" ", "_"))
            && item.toLowerCase().includes(".jpg")
        );
        // console.log(fileNames);
        const fileName = fileNames[0];
        const res = await fetch(
            `https://en.wikipedia.org/w/api.php?action=query&prop=imageinfo&titles=File:${fileName}&format=json&iiprop=url&origin=*`,
            options,
        );
        const results = await res.json();
        const imageLink = Object.values(results.query.pages)[0].imageinfo[0].url;
        setImageUrl(imageLink);
        return "";
    } catch (error) {
        Sentry.captureException(error);

        console.log(error.message);
    }
};

export default fetchImage;
