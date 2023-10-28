import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics.jsx";
import user from "./Data/user.json";
import statistics from "./Data/statistics.json"

export const App = () => {
  return (
    <div>
      <h1 className="title">goit-react-hw-01-components</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statistics} />
    </div>
  );
};
