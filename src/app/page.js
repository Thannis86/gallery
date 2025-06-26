import { Card, Text } from "@radix-ui/themes";

import "./homepage.css";
import DisplayImages from "./components/Images/DisplayImages";

export default function homePage() {
  return (
    <div id="main">
      <Card>
        <Text>Hello</Text>
        <DisplayImages />
      </Card>
    </div>
  );
}
