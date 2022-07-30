import { useState } from "react";

function ContentForm() {
  const [input, setInput] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  return (
    <form className="flex flex-col relative space-y-2 text-black/80">
      <textarea
        rows={4}
        placeholder="What do you want to talk about?"
        className="bg-transparent focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <input
        type="text"
        placeholder="Add a photo URL (optional)"
        className="bg-transparent focus:outline-none truncate max-w-xs md:max-w-sm"
        value={photoUrl}
        onChange={(e) => setPhotoUrl(e.target.value)}
      />

      <button
        className="absolute bottom-0 right-0 font-medium bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1"
        type="submit"
        // onClick={{}}
        disabled={!input.trim() && !photoUrl.trim()}
      >
        Post
      </button>
    </form>
  );
}

export default ContentForm;
