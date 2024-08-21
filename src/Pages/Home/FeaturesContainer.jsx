import style from "./FeaturesContainer.module.css";

function FeaturesContainer() {
  return (
    <section className={style.featureContainer}>
      <div className="featureName">Logo Practical Slips</div>
      <div className="featureDescription">
        here we provide fy, sy and ty bbaca slip solution with try yourself
        features
      </div>
      <div className="featureLink">
        <a href="/slip">Link</a>
      </div>
    </section>
  );
}

export default FeaturesContainer;
