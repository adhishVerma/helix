import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

// Temporary
const stories = [
  {
    id: 1,
    name: "John Doe",
    img: "https://images.pexels.com/photos/10768835/pexels-photo-10768835.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 2,
    name: "John Doe",
    img: "https://images.pexels.com/photos/14446665/pexels-photo-14446665.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 3,
    name: "John Doe",
    img: "https://images.pexels.com/photos/3642030/pexels-photo-3642030.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 4,
    name: "John Doe",
    img: "https://images.pexels.com/photos/8189072/pexels-photo-8189072.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    id: 5,
    name: "John Doe",
    img: "https://images.pexels.com/photos/14250721/pexels-photo-14250721.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
];

const Stories = () => {

  const {currentUser} = useContext(AuthContext);

  return <div className="stories">
    <div className="story" id={currentUser.id}>
        <img src={currentUser.profilePic} alt="add Story" id="add-story"/>
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
    {stories.map(story => (
      <div className="story" id={story.id}>
        <img src={story.img} alt={`${story.name}'s story`} />
        <span>{story.name}</span>
      </div>
    ))}
  </div>;
};

export default Stories;
