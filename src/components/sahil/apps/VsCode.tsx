import React from 'react';

export default function VsCodeApp() {
  return (
    <div className="w-full h-full bg-[#1e1e1e] flex flex-col select-none overflow-hidden">
      <iframe
        src="https://github1s.com/vivek9patel/vivek9patel.github.io/blob/HEAD/components/ubuntu.js"
        title="Visual Studio Code"
        className="w-full h-full border-none"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
}
