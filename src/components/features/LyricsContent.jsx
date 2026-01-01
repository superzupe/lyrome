const LyricsContent = ({ item }) => {
  const verses = item.lyrics.split("\n\n");

  return (
    <div className="space-y-6 px-3 py-2">
      {verses.map((verse, i) => (
        <div
          key={i}
          className="space-y-1"
        >
          {verse.split("\n").map((line, i) => (
            <p
              key={i}
            
            >
              {line}
            </p>
          ))}
        </div> 
      ))}
    </div>
  );
};
export default LyricsContent;
