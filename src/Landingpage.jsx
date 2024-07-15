

function LandingPage() {
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/c/c0/VocaDi-Travel%2CActivities.jpeg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">RoamRadar</h1>
            <h2 className="mb-5">Get Me Somewhere.</h2>
            <button className="btn btn-active btn-neutral">Get Started</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default LandingPage;