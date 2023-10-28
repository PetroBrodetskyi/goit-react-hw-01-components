import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics.jsx";
import user from "./Data/user.json";
import statistics from "./Data/statistics.json";
import friends from "./Data/friends.json";
import FriendList from "./FriendList/Friendlist.jsx";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statistics} />
      <FriendList friends={friends} />
    </div>
  );
};
