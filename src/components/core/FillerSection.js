export const FillerSection = ({ fillAmount = 100 }) => {
  return (
    <div className={`container py-5 scroll-fill-${fillAmount} d-flex center`}>
      <div>
        <p className="text-muted opacity-10">Filler Content</p>
        <p className="text-muted opacity-20">Filler Content</p>
        <p className="text-muted opacity-30">Filler Content</p>
        <p className="text-muted opacity-60">Filler Content</p>
        <p className="text-muted opacity-80">Filler Content</p>
        <p className="text-muted opacity-60">Filler Content</p>
        <p className="text-muted opacity-30">Filler Content</p>
        <p className="text-muted opacity-20">Filler Content</p>
        <p className="text-muted opacity-10">Filler Content</p>
      </div>
    </div>
  );
};
