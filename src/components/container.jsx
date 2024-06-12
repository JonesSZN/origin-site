import { cn } from "../lib/tw-merge";

const Container = ({ children, className }) => {
  return (
    <div className={cn("lg:w-[68%] w-[90%] max-w-[1450px]", className)}>
      {children}
    </div>
  );
};

export { Container };
