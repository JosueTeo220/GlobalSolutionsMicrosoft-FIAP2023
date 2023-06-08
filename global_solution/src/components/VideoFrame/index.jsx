function VideoFrame() {
  return (
    <div className="container-fluid mt-5 w-75">
      <div className="row justify-content-center text-center text-light p-lg-5">
        <h1>
          Acompanhe mais sobre o assunto
        </h1>
      <iframe
          width={'500px'}
          height={'600px'}
          src={"https://www.youtube.com/embed/ORrTV1zREuQ"}
          title={"YouTube video player"}
          allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
export default VideoFrame;
