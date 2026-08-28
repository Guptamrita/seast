import React, { useEffect } from 'react';
import Ubuntu from '@/components/sahil/Ubuntu';
import SEO from '@/components/SEO';

export default function Sahil() {
  useEffect(() => {
    document.title = "Sahil's OS — Ubuntu 20.04 Web Desktop Portfolio";
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <SEO
        title="Sahil's OS — Ubuntu 20.04 Web Desktop Portfolio"
        description="Interactive Ubuntu 20.04 OS simulation portfolio of Sahil: Full-Stack Developer, featuring draggable windows, interactive terminal, VS Code, file manager, and projects."
        canonical="https://amritagupta.com.np/sahil"
      />
      <Ubuntu />
    </div>
  );
}
