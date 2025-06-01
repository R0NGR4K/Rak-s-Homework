type UsernameProps = {
  name: string;
};

const Username = ({ name }: UsernameProps) => {
  return <p>Username: {name}</p>;
};

export default Username;
