import React from 'react';

export default function SpotifyApp() {
  return (
    <div className="w-full h-full bg-[#121212] flex flex-col items-center justify-center p-0 overflow-hidden select-none">
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfTFmNBRM"
        title="Spotify Music"
        width="100%"
        height="100%"
        allow="encrypted-media"
        className="border-none bg-[#121212]"
      />
    </div>
  );
}
