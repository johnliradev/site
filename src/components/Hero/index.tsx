export const Hero = () => {
  return (
    <div>
      <p className="text-4xl/14">
        hi,
        <br />
        <span className="text-7xl font-bold">i'm John</span>
      </p>
      <p className="text-4xl/12 mt-4 ">
        No hyper bio, <br />
        just a full-stack developer
      </p>
      <div className="flex items-center gap-2">
        <div className="ping h-2 w-2 bg-green-600 rounded-full"></div>
        <p>Immediately available</p>
      </div>
    </div>
  );
};
