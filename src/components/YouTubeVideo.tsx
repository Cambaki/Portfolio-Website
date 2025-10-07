interface YouTubeVideoProps {
  videoId: string;
  title: string;
  className?: string;
  isShort?: boolean;
}

export default function YouTubeVideo({ videoId, title, className = '', isShort = false }: YouTubeVideoProps) {
  console.log('YouTubeVideo rendering:', { videoId, title, isShort });
  
  return (
    <div className={`relative ${isShort ? 'max-w-md mx-auto' : 'w-full'} ${className || ''}`}>
      <div className={`relative w-full h-0 ${isShort ? 'pb-[177.78%]' : 'pb-[56.25%]'}`}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}