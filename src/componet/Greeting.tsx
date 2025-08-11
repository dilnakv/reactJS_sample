type GreetingProps = {
  name: string;
};
export const Greeting = (props: GreetingProps) => {
  return <h2>Welcome {props.name}</h2>;
};
