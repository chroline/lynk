import LynkLogo from "../../public/lynk.svg";

export default function Credits() {
  console.log(LynkLogo.src);
  return (
    <div className={"credits"}>
      <img src={LynkLogo.src} alt={"powered by lynk"} />
    </div>
  );
}
