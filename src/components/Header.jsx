import { AvatarWithBadge } from "./Avatar";
import { ButtonDemo } from "./Button";
import { InputInline } from "./SearchBar";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const handleSingup = () => {
    navigate("/signup");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/logout", {
        method: "POST",
        credentials: "include",
      });
      localStorage.removeItem("isLoggedIn");
      console.log("Logout Successfully !");
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="hidden md:flex w-100 ">
        <InputInline />
      </div>
      <div className="flex items-center ml-auto gap-2">
        {!isLoggedIn ? (
          <>
            <ButtonDemo handle={handleLogin} name={"Login"} />
            <ButtonDemo handle={handleSingup} name={"Signup"} />
          </>
        ) : (
          <ButtonDemo handle={handleLogout} name={"Logout"} />
        )}
        <AvatarWithBadge />
      </div>
    </>
  );
};
export default Header;
