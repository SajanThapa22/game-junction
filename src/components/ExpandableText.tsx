import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const ExpandableText = ({ children, maxChars }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!children) return null;
  const minText = isExpanded
    ? children
    : children.substring(0, maxChars) + "...";
  if (children.length <= maxChars) return <Text>{children}</Text>;
  return (
    <>
      <Text>
        {" "}
        {isExpanded ? children : minText}{" "}
        <Button
          marginX={1}
          colorScheme="yellow"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="btn btn-primary"
        >
          {isExpanded ? "show less" : "show more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
