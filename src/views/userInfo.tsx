type UserInfoProps = {
  name: string;
  gender: string;
};

const UserInfo = ({ name, gender }: UserInfoProps) => {
  return (
    <div className="flex">
      <p>Username: {name}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

export default UserInfo;
