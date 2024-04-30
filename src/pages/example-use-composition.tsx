import { Message } from "../components/Message";

export function ExampleUseComposition() {
  return (
    <>
      <h1>Mensagens:</h1>

      <Message.Root>
        <Message.Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dicta quis in consequuntur voluptates. Et ut aliquid sint accusantium quibusdam exercitationem amet! Cupiditate quaerat magni ab in nesciunt est ad.</p>
        </Message.Content>
      </Message.Root>
      
      <Message.Root>
        <Message.Content>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dicta quis in consequuntur voluptates. Et ut aliquid sint accusantium quibusdam exercitationem amet! Cupiditate quaerat magni ab in nesciunt est ad.</p>
        </Message.Content>
      </Message.Root>
    </>
  )
}