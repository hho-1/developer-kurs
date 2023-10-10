import {Button, DarkButton} from "./components/Button.styled"
import FlexDiv from "./components/Flex.styled";
import { Links } from "./components/Link.styled";
import { Title } from "./components/Title.styled";


const App = () => {
  return (
    <>
      <h1>Styled Components</h1>
      <FlexDiv bg="#bebe">
        <Title renk="hotpink">styled Title</Title>
        <Title renk="hotpink" bgRenk="#eee">styled Title</Title>
        <Button>Normal</Button>
        <Button primary>Props</Button>
        <DarkButton>Dark</DarkButton>
      </FlexDiv>
      <FlexDiv>
        <Links href="https://www.google.com" target = "_blank">Styled Link</Links>
      </FlexDiv>
      
    </>
  );
};

export default App;
