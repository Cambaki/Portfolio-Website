interface YouTubeVideoProps {
  videoId: string;
  title: string;
  className?: string;
}

export default function YouTubeVideo({ videoId, title, className }: YouTubeVideoProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}